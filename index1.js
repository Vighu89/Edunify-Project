const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
var multer = require('multer');
const app = express();

var upload = multer();
app.use(upload.array()); 
app.use(express.static('public'));
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Create connection to MySQL database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // your MySQL username
    password: 'Ranjana@123',      // your MySQL password
    database: 'schooldb'  // your MySQL database name
});

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Route to add a school
app.post('/addschool', (req, res) => {
    console.log('req.body', req.body)
    const { name, address, city, state, contact, email_id } = req.body.data;
    const query = 'INSERT INTO schools (name, address, city, state, contact, email_id) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, address, city, state, contact, email_id], (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send('School added successfully');
        }
    });
});

// Route to fetch all schools
app.get('/schools', (req, res) => {
    const query = 'SELECT * FROM schools';
    db.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
