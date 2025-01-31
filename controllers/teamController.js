const mongoose = require('mongoose');
const Team = require('../models/team');

// Create a team
const createTeam = async (req, res) => {
  try {
    const { team_name, members, team_leader, created_by } = req.body;

    // Convert user_id, team_leader, and created_by to ObjectId
    const formattedMembers = members.map(member => ({
      user_id: new mongoose.Types.ObjectId(member.user_id),
      name: member.name,  // Store the name
      role: member.role,
      status: member.status,
    }));

    // Ensure team_leader is an ObjectId
    const team = new Team({
      team_name,
      members: formattedMembers,
      team_leader: mongoose.Types.ObjectId(team_leader),  // Cast to ObjectId here
      created_by: mongoose.Types.ObjectId(created_by),    // Ensure this is an ObjectId too
    });

    await team.save();
    res.status(201).json(team);
  } catch (err) {
    console.error(err);  // Log the error for better debugging
    res.status(400).json({ message: err.message });
  }
};

// Get all teams with populated user details
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find()
      .populate("members.user_id")
      .populate("team_leader")
      .populate("created_by");
    res.status(200).json(teams);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

// Get team by ID
const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id)
      .populate("members.user_id")
      .populate("team_leader")
      .populate("created_by");

    if (!team) return res.status(404).json({ message: "Team not found" });

    res.status(200).json(team);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createTeam, getAllTeams, getTeamById };
