import express from 'express';
import multer from 'multer';
import * as tf from '@tensorflow/tfjs-node';
import cocoSsd from '@tensorflow-models/coco-ssd';

const app = express();
const upload = multer({ dest: 'uploads/' });

// Add a GET route for testing
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.post('/upload', upload.single('image'), async (req, res) => {
  const imagePath = req.file.path;
  try {
    const image = await tf.node.decodeImage(imagePath);
    const model = await cocoSsd.load();
    const predictions = await model.detect(image);

    predictions.forEach(prediction => {
      if (prediction.class === 'elephant') {
        res.send('Elephant detected!');
      }
    });
    res.send('No elephant detected.');
  } catch (error) {
    res.status(500).send('Error during detection.');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
