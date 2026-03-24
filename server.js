require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/auth', (req, res) => {
  const { pin } = req.body;
  if (pin === process.env.ACCESS_PIN) {
    return res.json({ success: true });
  }
  return res.json({ success: false, message: 'Invalid access code' });
});

app.get('/api/slides', (req, res) => {
  const slidesPath = path.join(__dirname, 'data', 'slides.json');
  const data = JSON.parse(fs.readFileSync(slidesPath, 'utf-8'));
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SalesDeck Coach running at http://localhost:${PORT}`);
});
