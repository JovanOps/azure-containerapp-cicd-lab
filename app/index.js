const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.APP_MESSAGE || "Azure Container App is running 🚀";

app.get('/', (req, res) => {
  res.send(MESSAGE);
});

app.get('/health', (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
