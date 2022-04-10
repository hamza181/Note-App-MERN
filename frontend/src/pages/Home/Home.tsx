import React, { useState } from "react";
import OutlinedCard from "../../components/OutlinedCard";
import classes from "./Home.module.scss";

const Home = () => {
  const [todo, setTodo] = useState([{ id: 1, notes: "Learn React" }]);
  const [inputValue, setInputValue] = useState("");
  const [indexValue, setIndexValue] = useState("");
  const [editInputValue, setEditInputValue] = useState("");
  const [editableForm, setEditableForm] = useState(false);
  const [editItemId, setEditItemId] = useState("");
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
                <button className={classes.noteBtn}>Edit Task</button>
                <button className={classes.deltAllBtn}>Cancel</button>
              </>
            ) : (
              <>
                <button className={classes.noteBtn}>Add Task</button>
                <button className={classes.deltAllBtn}>Delete All</button>
              </>
            )}
          </div>
        </div>

        <div className={classes.mainBox2}>
          {todo.map((value, index) => {
            return (
              <div className={classes.list} key={value.id}>
                <div className={classes.listValue}>{value.notes}</div>
                <div className={classes.buttons}>
                  <button>Edit</button>
                  <button>Delete</button>
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
