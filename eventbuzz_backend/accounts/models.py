from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self) -> str:
        return self.email

class Movie(models.Model):
    movie_id = models.AutoField(primary_key=True)
    movie_name = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=3, decimal_places=1)  # e.g., rating like 8.5
    votes = models.CharField(max_length=20)  # total number of votes
    release_date = models.DateField()  # date of release
    genres = models.CharField(max_length=255)  # store as a comma-separated string (or a ManyToManyField to a Genre model)
    duration = models.CharField(max_length=20)  # duration in minutes
    languages = models.CharField(max_length=255)  # store as a comma-separated string 
    dimensions = models.CharField(max_length=50) 
    poster_path = models.CharField(max_length=512) # path to the poster image
    banner_path = models.CharField(max_length=512)  # path to the banner image
    description = models.TextField()  # detailed description of the movie

    def __str__(self):
        return self.movie_name

class Actor(models.Model):
    actor_id = models.AutoField(primary_key=True)
    actor_name = models.CharField(max_length=255)
    actor_role = models.CharField(max_length=255)
    image_path = models.CharField(max_length=200)
    movie_id = models.ForeignKey(Movie, on_delete=models.CASCADE)

    def __str__(self):
        return self.actor_name 
        
class Crew(models.Model):
    crew_id = models.AutoField(primary_key=True)
    crew_name = models.CharField(max_length=255)
    crew_role = models.CharField(max_length=255)  # Role of the crew member 
    image_path = models.CharField(max_length=255)  # Path to the image as a CharField
    movie_id = models.ForeignKey('Movie', on_delete=models.CASCADE)  # Foreign key to Movie model

    def __str__(self):
        return self.crew_name