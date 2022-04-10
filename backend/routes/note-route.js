const express = require("express");

const router = express.Router();

const noteController = require("../controllers/note-controller");

router.post("/add", noteController.createNote);
router.get("/get/:id", noteController.getNote);

module.exports = router;
