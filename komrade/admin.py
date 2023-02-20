from django.contrib import admin
from django.contrib.auth import get_user_model

# Register your models here.
Account=get_user_model()
class AccountAdmin(admin.ModelAdmin):
    list_display = ("id","username", "password","email","is_admin","is_staff", "is_superuser","is_komrade")

admin.site.register(Account, AccountAdmin)