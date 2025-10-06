// controllers/studentController.js

const Student = require('../models/studentModel');

// ➕ Create Student
exports.addStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send('✅ Student added successfully!');
    } catch (err) {
        res.status(400).send('❌ Error adding student: ' + err.message);
    }
};

// 📋 Get All Students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(500).send('❌ Error fetching students: ' + err.message);
    }
};

// 🔍 Get Student by Roll No
exports.getStudentByRoll = async (req, res) => {
    try {
        const student = await Student.findOne({ rollNo: req.params.rollNo });
        if (!student) return res.status(404).send('⚠️ Student not found');
        res.json(student);
    } catch (err) {
        res.status(400).send('❌ Error: ' + err.message);
    }
};

// ✏️ Update Student
exports.updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findOneAndUpdate(
            { rollNo: req.params.rollNo },
            req.body,
            { new: true }
        );
        if (!updatedStudent) return res.status(404).send('⚠️ Student not found');
        res.send('✅ Student updated successfully!');
    } catch (err) {
        res.status(400).send('❌ Error updating student: ' + err.message);
    }
};

// ❌ Delete Student
exports.deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findOneAndDelete({ rollNo: req.params.rollNo });
        if (!deletedStudent) return res.status(404).send('⚠️ Student not found');
        res.send('🗑️ Student deleted successfully!');
    } catch (err) {
        res.status(400).send('❌ Error deleting student: ' + err.message);
    }
};
