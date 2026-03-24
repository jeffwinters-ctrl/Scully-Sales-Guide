const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const slidesPath = path.join(__dirname, '..', 'data', 'slides.json');
    const data = JSON.parse(fs.readFileSync(slidesPath, 'utf-8'));
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load slides' });
  }
};
