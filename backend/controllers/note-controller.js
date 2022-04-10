const Note = require("../models/note");
const mongoose = require("mongoose");

const createNote = async (req, res, next) => {
  const { title, description } = req.body;

  const createdNote = new Note({
    title,
    description,
  });

  console.log(createdNote);

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

exports.createNote = createNote;
