app.post('/api/generate-video', (req, res) => {
  const { prompt, type, duration } = req.body;

  console.log(`Generating video with prompt: ${prompt}, type: ${type}, duration: ${duration}`);

  // Simulate logic (replace this with your model output in future)
  const baseUrl = "https://samplelib.com/lib/preview/mp4";
  const durationMap = {
    "5": "sample-5s.mp4",
    "10": "sample-10s.mp4",
    "15": "sample-15s.mp4",
    "30": "sample-30s.mp4"
  };
  const videoName = durationMap[duration] || "sample-5s.mp4";

  res.json({
    video_url: `${baseUrl}/${videoName}`
  });
});
