from django.urls import path
from .views import *
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path("register/", UserRegistrationAPIView.as_view(), name='register-user'),
    path("login/", UserLoginAPIView.as_view(), name='login-user'),
    path("logout/", UserLogoutAPIView.as_view(), name='logout-user'),
    path("token/refresh/", TokenRefreshView.as_view(), name='token-refresh'),
    path("user/", UserInfoAPIView.as_view(), name="user-info"),

    path('movies/', MovieListView.as_view(), name='movie-list'),
    path('events/', EventListView.as_view(), name='event-list'),
    path('sports/', SportsListView.as_view(), name='sport-list'),
    path('movies/<int:movie_id>/', MovieDetailView.as_view(), name='movie-detail'),
    path('movies/<int:movie_id>/cast/', MovieCastView.as_view(), name='movie-cast'),
    path('movies/<int:movie_id>/crew/', MovieCrewView.as_view(), name='movie-crew'),
    path('events/<int:event_id>/', EventDetailView.as_view(), name='event-detail'),
    path('sports/<int:sport_id>/', SportsDetailView.as_view(), name='sport-detail'),
]
