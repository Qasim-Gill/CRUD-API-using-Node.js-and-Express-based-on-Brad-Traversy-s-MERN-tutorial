const dotenv = require('dotenv').config();
const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middlewares/errorMiddlewear');

port = process.env.PORT || 5000;

const app = express();

connectDB();

// Middleware purpose
// Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
// express.json() is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
// express.urlencoded() is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));
// it will update default error handler class of express
app.use(errorHandler);

// Middleware
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
