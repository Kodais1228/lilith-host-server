
// Lilith Empire Starter Server (Nova Edition)
// Tech: Node.js + Express (easy to host on Railway + mobile-manageable)
// Features: SFW/NSFW toggle, fingerprint lock placeholder, static Lilith UI, and flexible API support

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Toggle state (in-memory, non-persistent)
let sfwMode = true;

// Middleware to block NSFW content when SFW mode is on
function sfwGuard(req, res, next) {
  if (sfwMode && req.path.startsWith('/nsfw')) {
    return res.status(403).send('NSFW content blocked in SFW mode.');
  }
  next();
}

// Serve static UI files
app.use(express.static(path.join(__dirname, 'public')));
app.use(sfwGuard);

// Toggle routes
app.get('/toggle', (req, res) => {
  sfwMode = !sfwMode;
  res.send(`SFW mode is now ${sfwMode ? 'ENABLED' : 'DISABLED'}`);
});

// Fingerprint lock simulation route (placeholder)
app.post('/unlock', express.json(), (req, res) => {
  const { fingerprint } = req.body;
  if (fingerprint === 'demo-unlock-code') {
    res.send('Unlocked successfully. NSFW mode accessible.');
  } else {
    res.status(401).send('Invalid fingerprint');
  }
});

// Example NSFW route (blocked in SFW mode)
app.get('/nsfw/example', (req, res) => {
  res.send('This is NSFW content. Only visible in NSFW mode.');
});

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Lilith server running on port ${PORT}`);
});
