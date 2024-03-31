// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controlers/authController');
const registrationController = require('../controlers/regController');
const { requireAuth } = require('../middleware/authmiddleware');
const passwordResetController = require('../controlers/passwordResetController');
<<<<<<< HEAD
const { addModule, getModule, updateModule, deleteModule } = require('../controlers/moduleController');
const { insertQuizQuestion,getQuestionsByTopic,checkAnswer, getAllTopicNames } = require('../controlers/quiz');




// Authentication routes
router.post('/login', authController.login);
router.get('/allData', authController.allData);

=======

// Authentication routes
router.post('/login', authController.login);
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344

// Registration route with authentication middleware
router.post('/register', requireAuth, registrationController.register);

// router.post('/forgot', passwordResetController.requestPasswordReset);
// router.post('/reset', passwordResetController.resetPassword);
<<<<<<< HEAD
router.post('/reset-password',passwordResetController.resetPassword);
router.post('/addmodule',addModule);

router.post('/insertQuiz',insertQuizQuestion);

router.get('/getQuestionsByTopic/:topic',getQuestionsByTopic); 

router.post('/checkAnswer',checkAnswer);
router.get('/topic',getAllTopicNames);
router.get('/module',getModule);


=======
router.post('/reset-password',passwordResetController.resetPassword)
>>>>>>> ee9b51f910e5cbe7b5fdfd45d0041d917af97344

module.exports = router;
