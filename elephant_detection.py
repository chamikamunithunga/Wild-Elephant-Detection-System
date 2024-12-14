import torch
from PIL import Image

# Load YOLOv5 model
model = torch.hub.load('ultralytics/yolov5', 'yolov5s')  # Pre-trained YOLOv5 model

# Inference on an image
img = 'elephant.jpg'  # Replace with your image path
results = model(img)

# Show results
results.show()
