from django.contrib import admin
from .models import CustomUser, Movie, Actor,Crew
from .forms import CustomUserChangeForm, CustomUserCreationForm
from django.contrib.auth.admin import UserAdmin

@admin.register(CustomUser)
class CustomAdminUSer(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = CustomUser

@admin.register(Movie)
class Movie(admin.ModelAdmin):
    # This will display all fields 
    list_display = ('movie_id', 'movie_name', 'rating', 'votes', 'release_date', 'genres', 
                    'duration', 'languages', 'dimensions', 'poster_path', 'banner_path', 'description')
@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ('actor_id', 'actor_name', 'actor_role', 'image_path', 'movie_id')

@admin.register(Crew)
class CrewAdmin(admin.ModelAdmin):
    list_display = ('crew_id', 'crew_name', 'crew_role', 'image_path', 'movie_id')