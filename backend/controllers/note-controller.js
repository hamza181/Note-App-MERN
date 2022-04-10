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

const updateNote = async (req, res, next) => {
  const noteId = req.params.id;
  const { title, description } = req.body;

  let note;
  try {
    note = await Note.findById(noteId);
  } catch (error) {
    res.status(500).json({
      message: "Fetching a note failed!",
    });
  }

  note.title = title;
  note.description = description;

  try {
    await note.save();
  } catch (error) {
    res.status(500).json({
      message: "Updating a note failed!",
    });
  }

  res.json({
    message: "Note updated successfully!",
    note: note,
  });
};

exports.createNote = createNote;
exports.getNote = getNote;
exports.updateNote = updateNote;
