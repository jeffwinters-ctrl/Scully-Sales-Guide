const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  try {
    const slidesPath = path.join(__dirname, '..', 'data', 'slides.json');
    let raw = fs.readFileSync(slidesPath, 'utf-8');
    if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
    const data = JSON.parse(raw);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: 'Failed to load slides', detail: e.message, code: e.code });
  }
};
