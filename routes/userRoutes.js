const express = require('express');
const router = express.Router();
const { createUser, getAllUsers, getUserById } = require('../controllers/userController');

router.post('/', createUser); // Create User
router.get('/', getAllUsers); // Get all users
router.get('/:id', getUserById); // Get user by ID

module.exports = router;
