const express = require("express");

const router = express.Router();

const noteController = require("../controllers/note-controller");

router.post("/add", noteController.createNote);
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNote);
router.patch("/:id", noteController.updateNote);

module.exports = router;
