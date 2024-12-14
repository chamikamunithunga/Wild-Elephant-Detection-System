// Import TensorFlow.js and the coco-ssd model
import * as tf from '@tensorflow/tfjs-node';
import cocoSsd from '@tensorflow-models/coco-ssd';

// Load the model and detect elephants in an image
async function detectElephants(imagePath) {
  try {
    // Decode the image from the given path
    const image = await tf.node.decodeImage(imagePath);
    
    // Load the COCO-SSD pre-trained model
    const model = await cocoSsd.load();
    
    // Run the detection on the image
    const predictions = await model.detect(image);
    console.log(predictions);

    // Check if an elephant is detected
    predictions.forEach(prediction => {
      if (prediction.class === 'elephant') {
        console.log('Elephant detected!');
      }
    });
  } catch (error) {
    console.error('Error during detection:', error);
  }
}

// Call the function with the path to your image
detectElephants('path/to/your/elephant-image.jpg');
