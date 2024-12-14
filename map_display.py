import folium
from geopy.distance import geodesic

# User location (simulated)
user_location = (6.9271, 79.8612)  # Colombo, Sri Lanka

# Elephant sightings (simulated)
elephants = [
    {"name": "Elephant 1", "location": (6.9341, 79.8847)},
    {"name": "Elephant 2", "location": (6.9200, 79.8700)},
]

# Create map
mymap = folium.Map(location=user_location, zoom_start=12)

# Add user marker
folium.Marker(user_location, tooltip="You", icon=folium.Icon(color="blue")).add_to(mymap)

# Add elephant markers
for elephant in elephants:
    folium.Marker(elephant["location"], tooltip=elephant["name"], icon=folium.Icon(color="red")).add_to(mymap)

# Save the map to an HTML file
mymap.save("map.html")
print("Map saved as map.html")
