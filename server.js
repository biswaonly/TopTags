const express = require('express');	
const mongoose = require('mongoose');

const app = express();
const connectDB = require('./config/db');

// Connect MongoDB
connectDB();

// Init Middleware
app.use(express.json({ extended : false }));

// GET 
app.get('/', (req, res) => {
	res.send('OK ITS WORK');
});

// Define Routes
app.use('/api/tags', require('./router/api/tags'));
app.use('/auth', require('./router/auth'));

const port = process.env.PORT || 5000;

app.listen( port, console.log(`Server started on port ${port}`));