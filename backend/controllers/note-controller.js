const Note = require("../models/note");
const mongoose = require("mongoose");

const createNote = async (req, res, next) => {
  const { title, description } = req.body;

  const createdNote = new Note({
    title,
    description,
  });

  try {
    await createdNote.save();
    res.status(201).json({
      message: "Note created successfully",
      note: createdNote,
    });
  } catch (error) {
    res.status(500).json({
      message: "Creating a note failed!",
    });
  }
};

const getNote = async (req, res, next) => {
  const noteId = req.params.id;
  console.log("note id", noteId);

  let note;
  try {
    note = await Note.findById(noteId);
  } catch (error) {
    res.status(500).json({
      message: "Fetching a note failed!",
    });
  }
  res.json({
    note: note,
  });
};

exports.createNote = createNote;
exports.getNote = getNote;
