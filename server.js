const express = require('express');
const crypto = require('crypto');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const validIds = new Set();

// Generate a unique ID
app.post('/generate', (req, res) => {
    const uniqueId = crypto.randomUUID();
    validIds.add(uniqueId);

    // Debugging log
    console.log('Generated ID:', uniqueId);

    res.json({ uniqueId });
});

// Verify a unique ID
app.post('/verify', (req, res) => {
    const { uniqueId } = req.body;

    // Debugging log
    console.log('Verifying ID:', uniqueId);

    if (validIds.has(uniqueId)) {
        res.json({ valid: true });
    } else {
        res.json({ valid: false });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
