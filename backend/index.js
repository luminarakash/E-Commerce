const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// CORS Configuration
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

// Body parser with increased limit
app.use(express.json({ limit: '10mb' })); // yahan 10mb set kiya hai, aap isko zarurat ke hisaab se badha sakte hain
app.use(cookieParser());

app.use("/api", router);

const PORT = process.env.PORT || 8080; // yahan sahi se set kiya hai

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});

// Home route to check server status
app.get('/', (req, res) => {
    res.send('<h1>Backend is Running</h1>');
});
