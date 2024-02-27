// full_server/routes/index.js

const express = require('express');
const router = express.Router();
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

// Link the route / to the AppController
router.get('/', AppController.getHomepage);

// Link the route /students to the StudentsController for all students
router.get('/students', StudentsController.getAllStudents);

// Link the route /students/:major to the StudentsController for a specific major
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
