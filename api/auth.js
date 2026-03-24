module.exports = (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    const { pin } = body || {};
    const expected = process.env.ACCESS_PIN;
    if (pin && expected && pin.trim() === expected.trim()) {
      return res.json({ success: true });
    }
    return res.json({ success: false, message: 'Invalid access code' });
  } catch {
    return res.status(400).json({ success: false, message: 'Bad request' });
  }
};
