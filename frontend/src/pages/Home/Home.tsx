import React, { useEffect, useState } from "react";
import OutlinedCard from "../../components/OutlinedCard";
import classes from "./Home.module.scss";
import axios from "axios";

const Home = () => {
  const [todo, setTodo] = useState([{ id: 1, notes: "Learn React" }]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [editableForm, setEditableForm] = useState(false);
  const [editItemId, setEditItemId] = useState("");
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    axios
      .get("http://localhost:5000/notes")
      .then((res) => {
        setNotes(res.data.note);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNote = (e: any) => {
    if (inputValue.length < 1) return;
    e.preventDefault();
    const newNote = {
      description: inputValue,
      title: "Note",
    };
    axios
      .post("http://localhost:5000/notes", newNote)
      .then((res) => {
        getAllNotes();
        setInputValue("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteNote = (id: any) => {
    axios
      .delete(`http://localhost:5000/notes/${id}`)
      .then((res) => {
        getAllNotes();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickEdit = (value: any) => {
    setEditableForm(true);
    setInputValue(value.description);
    setEditItemId(value.id);
  };

  const editNote = (e: any) => {
    e.preventDefault();

    const newNote = {
      description: inputValue,
      title: "Note",
    };
    axios
      .patch(`http://localhost:5000/notes/${editItemId}`, newNote)
      .then((res) => {
        getAllNotes();
        setEditableForm(false);
        clickCancel();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickCancel = () => {
    setEditableForm(false);
    setInputValue("");
    setEditItemId("");
  };

  return (
    <>
      <div className={classes.mainBox}>
        <div className={classes.mainBox1}>
          <h1>Todo App React</h1>
          <div className={classes.getInput}>
            <input
              type="text"
              placeholder="Take a Note"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            {editableForm ? (
              <>
                <button className={classes.noteBtn} onClick={editNote}>
                  Edit Task
                </button>
                <button className={classes.deltAllBtn} onClick={clickCancel}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <button className={classes.noteBtn} onClick={addNote}>
                  Add Task
                </button>
                <button className={classes.deltAllBtn}>Delete All</button>
              </>
            )}
          </div>
        </div>

        <div className={classes.mainBox2}>
          {notes.map((value: any, index) => {
            return (
              <div className={classes.list} key={value.id}>
                <div className={classes.listValue}>{value.description}</div>
                <div className={classes.buttons}>
                  <button
                    onClick={() => {
                      clickEdit(value);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      deleteNote(value.id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
