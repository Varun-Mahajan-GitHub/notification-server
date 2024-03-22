const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route for HTTP POST requests
app.post('/notification', (req, res) => {
    console.log('Received notification:', req.body);
    // Process the received data here

    // Respond to the request
    res.status(200).send('Notification received');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

