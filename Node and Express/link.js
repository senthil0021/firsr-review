const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: false }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;
    // Here you can handle the form submission (e.g., save to a database)
    console.log(`Received form submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
