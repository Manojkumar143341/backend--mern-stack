const mongoose = require("mongoose");

const TimetableSchema = new mongoose.Schema({
  subject: String,
  tutor: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  time: String,
  day: String,
  classroom: String,
});

module.exports = mongoose.model("Timetable", TimetableSchema);
