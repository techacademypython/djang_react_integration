from django.urls import path
from .views import MainIndexView, ApiCartListView

urlpatterns = [
    path('', MainIndexView.as_view(), name="index"),
    path('api/cards', ApiCartListView.as_view(), name="api"),
]
