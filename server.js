const express = require('express');
const cors = require('cors');
https://github.com/staggraphic/mini-veo/blob/main/server.js
const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('✅ Mini Veo backend is running!');
});

app.post('/api/generate-video', (req, res) => {
  const { prompt, type, duration } = req.body;
  console.log('Received:', { prompt, type, duration });

  const videos = {
    '5': 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
    '10': 'https://samplelib.com/lib/preview/mp4/sample-10s.mp4',
    '15': 'https://samplelib.com/lib/preview/mp4/sample-15s.mp4',
    '30': 'https://samplelib.com/lib/preview/mp4/sample-30s.mp4',
  };

  res.json({
    video_url: videos[duration] || videos['5']
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
