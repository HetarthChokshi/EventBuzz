from django.shortcuts import render
from rest_framework import generics
from rest_framework.generics import GenericAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import *
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status

class UserRegistrationAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserRegistrationSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh":str(token),
                          "access": str(token.access_token)}
        return Response(data, status= status.HTTP_201_CREATED)


class UserLoginAPIView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = UserLoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data= request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        serializer = CustomUserSerializer(user)
        token = RefreshToken.for_user(user)
        data = serializer.data
        data["tokens"] = {"refresh":str(token),  
                          "access": str(token.access_token)}
        return Response(data, status=status.HTTP_200_OK)
    
class UserLogoutAPIView(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    
    def post(self, request, *args, **kwargs):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status= status.HTTP_400_BAD_REQUEST)

class UserInfoAPIView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = CustomUserSerializer
    
    def get_object(self):
        return self.request.user
    

class MovieListView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = MovieSerializer

    def get_queryset(self):
        movies = Movie.objects.all()
        return movies
    

class EventListView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = EventsSerializer

    def get_queryset(self):
        return Event.objects.all()


class SportsListView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = Sportserializers

    def get_queryset(self):
        return Sport.objects.all()

class MovieDetailView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = MovieSerializer
    lookup_field = 'movie_id' 

    def get_queryset(self):
        movie_id = self.kwargs['movie_id']
        return Movie.objects.filter(movie_id=movie_id)
    

class MovieCastView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = ActorSerializer

    def get_queryset(self):
        movie_id = self.kwargs['movie_id']
        return Actor.objects.filter(movie_id=movie_id)
    

class MovieCrewView(generics.ListAPIView):
    permission_classes = (AllowAny,)
    serializer_class = CrewSerializer

    def get_queryset(self):
        movie_id = self.kwargs['movie_id']
        return Crew.objects.filter(movie_id=movie_id)
    

class EventDetailView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = EventsSerializer
    lookup_field = 'event_id' 

    def get_queryset(self):
        event_id = self.kwargs['event_id']
        return Event.objects.filter(event_id=event_id)
    

class SportsDetailView(generics.RetrieveAPIView):
    permission_classes = (AllowAny,)
    serializer_class = Sportserializers
    lookup_field = 'sport_id' 

    def get_queryset(self):
        sport_id = self.kwargs['sport_id']
        return Sport.objects.filter(sport_id=sport_id)