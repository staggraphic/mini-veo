const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

app.post('/api/generate-video', (req, res) => {
  const { prompt, type, duration } = req.body;
  console.log("📩 Request received:", { prompt, type, duration });

  // Simulated generated video URL
  const sampleVideo = 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4';

  res.json({ video_url: sampleVideo });
});

app.get('/', (req, res) => {
  res.send('✅ Mini Veo Backend is running');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
