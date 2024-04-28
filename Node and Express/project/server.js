const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    console.log(`Received form submission: Name - ${name}, Email - ${email}, Message - ${message}`);
    res.send('Form submitted successfully!');
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
