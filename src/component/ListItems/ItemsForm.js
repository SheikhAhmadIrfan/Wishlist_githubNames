import React, { useState, useEffect, useRef } from "react";
const ItemsForm=(props)=> {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const [Formpriority, setFormPriority] = useState(0);
  console.log("props.priority is " + Formpriority);
  const PriorityhandleChange = (event) => {
    const temp = event.target.value;
    props.priority1(temp);
    setFormPriority(event.target.value);
  };
  const inputRef = useRef(null);
  const priorityRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
    priorityRef.current?.focus();
  });
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      Priority: Formpriority,
    });
    setInput("");
    setFormPriority("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        {props.edit ? (
          <>
            <input
              placeholder="Update your item"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input edit todo-inputss"
            />
            <input
              type="number"
              id="number-input1"
              className="todo-input priorit-text edit"
              value={props.Priority}

              onChange={PriorityhandleChange}
            />

            <button onClick={handleSubmit} className="todo-button edit">
              Update
            </button>
          </>
        ) : (
          <>
            <input
              placeholder="Add a todo"
              value={input}
              onChange={handleChange}
              name="text"
              className="todo-input todo-inputss"
            />
            <input
              type="number"
              id="number-input"
              className="todo-input priorit-text"
              value={Formpriority}
              autoFocus
              onChange={PriorityhandleChange}
            />
            <button onClick={handleSubmit} className="todo-button">
              Add Item
            </button>
          </>
        )}
      </form>
    </>
  );
}
export default ItemsForm;