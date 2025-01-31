const mongoose = require('mongoose');

const oceanScoreSchema = new mongoose.Schema({
  openness: { type: Number, required: true },
  conscientiousness: { type: Number, required: true },
  extraversion: { type: Number, required: true },
  agreeableness: { type: Number, required: true },
  neuroticism: { type: Number, required: true }
});

const taskSchema = new mongoose.Schema({
  task_id: { type: String, required: true },
  task_description: { type: String, required: true },
  ocean_rating: oceanScoreSchema,
  deadline: { type: Date, required: true },
  time_required: { type: Number, required: true },
  priority: { type: String, required: true },
  credit: { type: Number, required: true },
  assigned_to: { type: String, required: true }
});

const userSchema = new mongoose.Schema({
  profile: {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    designation: { type: String, required: true },
    location: { type: String, required: true },
    joining_date: { type: Date, required: true }
  },
  workspace: { type: String, required: true },
  free_time: { type: Number, required: true },
  credits: { type: Number, required: true },
  type: { type: String, required: true },
  ocean_score: oceanScoreSchema,
  team_leader: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  tasks: [taskSchema]
});

const User = mongoose.model('User', userSchema);
module.exports = User;
