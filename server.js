const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Imara Women's Loan</h1>
        <p>Welcome to the FinaSwift Demo Project.</p>
        <button>Pay with M-Pesa</button>
    `);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
