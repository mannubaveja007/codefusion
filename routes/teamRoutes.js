const express = require('express');
const router = express.Router();
const { createTeam, getAllTeams, getTeamById } = require('../controllers/teamController');

router.post('/', createTeam); // Create Team
router.get('/', getAllTeams); // Get all teams
router.get('/:id', getTeamById); // Get team by ID

module.exports = router;
