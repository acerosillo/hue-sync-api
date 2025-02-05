// server.js
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let hues = [0, 120, 240]; // Initial hue values

// GET endpoint to fetch current hues
app.get('/api/hues', (req, res) => {
    res.json({ hues });
});

// POST endpoint to update hues
app.post('/api/hues', (req, res) => {
    if (req.body.hues && Array.isArray(req.body.hues)) {
        hues = req.body.hues;
        res.status(200).json({ message: 'Hues updated successfully' });
    } else {
        res.status(400).json({ error: 'Invalid data format' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Hue API running on http://localhost:${PORT}`));
