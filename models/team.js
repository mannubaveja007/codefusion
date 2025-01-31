const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  team_name: {
    type: String,
    required: true,
  },
  members: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,  // Store as ObjectId
        ref: "User",
        required: true,
      },
      name: {
        type: String,  // Store the name of the user
        required: true,
      },
      role: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active",
      }
    }
  ],
  team_leader: {
    type: mongoose.Schema.Types.ObjectId,  // Store as ObjectId
    ref: "User",  // Refers to the 'User' model
    required: true,  // This field is required
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,  // Store as ObjectId
    ref: "User",
    required: true,
  }
});

module.exports = mongoose.model("Team", TeamSchema);
