const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');

const app = express();
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/studentDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log("❌ DB Connection Error:", err));

// Routes
app.use('/students', studentRoutes);

// Start Server
app.listen(3000, () => {
    console.log('🚀 Server running on http://localhost:3000');
});
