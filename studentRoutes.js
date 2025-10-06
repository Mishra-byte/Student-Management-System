

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// CRUD Routes
router.post('/add', studentController.addStudent);
router.get('/', studentController.getAllStudents);
router.get('/:rollNo', studentController.getStudentByRoll);
router.put('/update/:rollNo', studentController.updateStudent);
router.delete('/delete/:rollNo', studentController.deleteStudent);

module.exports = router;
