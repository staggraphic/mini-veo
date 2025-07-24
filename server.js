const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/generate-video', (req, res) => {
  const { prompt, type, duration } = req.body;

  console.log(`Prompt: ${prompt}, Type: ${type}, Duration: ${duration}`);

  // Simulate generation delay
  setTimeout(() => {
    res.json({
      video_url: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4'
    });
  }, 3000);
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
