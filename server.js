const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

// ✅ Define the missing route:
app.post('/api/generate-video', (req, res) => {
  const { prompt, type, duration } = req.body;

  console.log('Video generation requested:');
  console.log('Prompt:', prompt);
  console.log('Type:', type);
  console.log('Duration:', duration);

  // Simulated response (for now)
  res.json({
    video_url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4'
  });
});

app.get('/', (req, res) => {
  res.send('Mini Veo backend running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
