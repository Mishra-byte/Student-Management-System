// models/studentModel.js

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rollNo: { type: Number, required: true, unique: true },
    department: { type: String, required: true },
    year: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);
