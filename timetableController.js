const Timetable = require("../models/Timetable");

exports.createTimetable = async (req, res) => {
  if (req.user.role !== "HOD") return res.status(403).json({ message: "Forbidden" });

  const timetable = new Timetable(req.body);
  await timetable.save();
  res.status(201).json({ message: "Timetable Created" });
};

exports.getTimetable = async (req, res) => {
  const timetable = await Timetable.find().populate("tutor");
  res.json(timetable);
};
