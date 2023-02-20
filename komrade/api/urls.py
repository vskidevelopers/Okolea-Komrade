from django.urls import path,include
from .views import RegisterView, RetrieveUserView

urlpatterns = [
    path('auth/register/', RegisterView.as_view() ),
    path('auth/me/', RetrieveUserView.as_view() ),
    path('auth/', include('dj_rest_auth.urls')),
]
