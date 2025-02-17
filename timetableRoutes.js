const express = require("express");
const { createTimetable, getTimetable } = require("../controllers/timetableController");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", auth, createTimetable);
router.get("/", getTimetable);

module.exports = router;
