from django.db import models
from django.shortcuts import reverse
from django.contrib.auth.hashers import make_password
from django.template.defaultfilters import slugify
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager

from .utils import generate_uuid_code


# Create your models here.
class AccountManager(BaseUserManager):
    def create_user(self, email,username, password=None):
        if not email:
            return ValueError("Users must have an email address")
        if not username:
            return ValueError("Users must have a username")
        
        print("Password >> ",password)
        print("Hashing Password!")
        hashed_password=make_password(password)
        print("HASHED PASSWORD >> ",hashed_password)        
        user=self.model(
            email=self.normalize_email(email).lower(),
            username=username,
            password=hashed_password,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email,username,password=None):        
        user = self.create_user(
            email=self.normalize_email(email).lower(),
            password = password,
            username = username,
        )
        user.set_password(password)
        user.is_admin=True
        user.is_superuser=True
        user.is_staff=True
        user.is_active=True
        user.is_komrade=True
        user.save(using=self._db)

        return user

class Account(AbstractBaseUser):
    email=models.EmailField(verbose_name='email', max_length=254, unique=True)
    username=models.CharField(verbose_name='username',max_length=100, unique=True)
    date_joined=models.DateTimeField(auto_now_add=True, verbose_name="date_joined")
    is_admin=models.BooleanField(default=False)
    is_active=models.BooleanField(default=True)
    is_superuser=models.BooleanField(default=False)
    is_staff=models.BooleanField(default=False)
    is_komrade=models.BooleanField(default=False)

    objects=AccountManager()

    USERNAME_FIELD ='email'
    REQUIRED_FIELDS=['username',]
    
    def __str__(self):
        return self.username
    
    def has_perm(self, permission, obj=None):
        return self.is_admin

    def has_module_perms(self, app_label):
        return self.is_superuser
    

class Profile(models.Model):

    first_name = models.CharField(max_length=100, blank=True, null=True)
    last_name = models.CharField(max_length=100, blank=True, null=True)
    bio= models.TextField(max_length=500, blank=True, null=True)
    user=models.OneToOneField(Account, on_delete=models.CASCADE)
    avatar = models.ImageField(default="avatar.png",  upload_to="avatars/")
    slug = models.SlugField(unique=True, blank=True, max_length=500)
    modified = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = ("Profile")
        verbose_name_plural = ("Profiles")

    def __str__(self):
        return self.user.username
    
    @property
    def imageURL(self):
        try:
            url = self.avatar.url
        except:
            url = ''
        print(" ### URL ###", +url)
        return url
    
    def get_display_bio(self):
        return str(self.bio[:20])
    
    def get_display_name(self):
        return f"{self.first_name} {self.last_name}"
    
    __initial_first_name = None
    __initial_last_name = None

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__initial_first_name = self.first_name
        self.__initial_last_name = self.last_name

    def get_absolute_url(self):
        return reverse("Profile_detail", kwargs={"pk": self.pk})
    
    def save(self, *args, **kwargs):
        """Save method for Profile."""
        ex =False
        slug = self.slug
        if self.first_name != self.__initial_first_name or self.last_name != self.__initial_last_name or self.slug =="":
            if self.first_name and self.last_name:
                slug= slugify(str(self.first_name)+" "+(self.last_name))
                ex = Profile.objects.filter(slug=slug).exists()
                while ex:
                    slug=slugify(slug+" "+ str(generate_uuid_code()))
                    ex=Profile.objects.filter(slug=slug).exists()
            else:
                slug = str(self.user.username)
        self.slug = slug
        super().save( *args, **kwargs)

