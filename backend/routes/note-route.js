const express = require("express");

const router = express.Router();

const noteController = require("../controllers/note-controller");

router.post("/", noteController.createNote);
router.get("/", noteController.getAllNotes);
router.get("/:id", noteController.getNote);
router.patch("/:id", noteController.updateNote);
router.delete("/:id", noteController.deleteNote);

module.exports = router;
