const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const slidesPath = path.join(__dirname, '..', 'data', 'slides.json');
    const raw = fs.readFileSync(slidesPath, 'utf-8');
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load slides', detail: e.message, code: e.code });
  }
};
