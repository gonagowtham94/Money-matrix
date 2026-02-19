const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'eren@1234', // Replace with your MySQL password
    database: 'IncomeTracker'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

// Route to Add Income
app.post('/add-income', (req, res) => {
    const { incomeType, amount, incomeDate } = req.body;
    const query = 'INSERT INTO income (income_type, amount, income_date) VALUES (?, ?, ?)';
    db.query(query, [incomeType, amount, incomeDate], (err, results) => {
        if (err) {
            console.error('Error inserting income data:', err);
            res.status(500).send('Error inserting data');
        } else {
            res.status(200).send('Income added successfully!');
        }
    });
});

// Route to Fetch Income History
app.get('/income-history', (req, res) => {
    const query = 'SELECT * FROM income ORDER BY income_date DESC';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching income data:', err);
            res.status(500).send('Error fetching data');
        } else {
            res.status(200).json(results);
        }
    });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
