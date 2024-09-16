from django.contrib import admin
from .models import CustomUser, Movie, Actor,Crew,Theatre,Event,Sport,Showtime
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
                    'duration', 'languages', 'dimensions', 'poster_path', 'banner_path', 'description', 'like_percentage')
@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ('actor_id', 'actor_name', 'actor_role', 'image_path', 'movie_id')

@admin.register(Crew)
class CrewAdmin(admin.ModelAdmin):
    list_display = ('crew_id', 'crew_name', 'crew_role', 'image_path', 'movie_id')
    
@admin.register(Theatre)
class TheatreAdmin(admin.ModelAdmin):
    list_display = ('theatre_id', 'theatre_name', 'city') 

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = (
        'event_id', 'event_name', 'genre', 'venue', 'date', 
        'languages', 'age_limit', 'poster_path', 'banner_path', 'description','like_percentage','votes'
    )  

@admin.register(Sport)
class SportAdmin(admin.ModelAdmin):
    list_display = ('sport_id', 'sport_name', 'category', 'poster_path', 'banner_path', 'venue', 'date', 'duration','like_percentage','votes') 

@admin.register(Showtime)
class ShowtimeAdmin(admin.ModelAdmin):
    list_display = ('show_id', 'movie', 'theatre', 'show_date', 'show_timing')

