import React, { useState } from "react";
import ItemsForm from "./ItemsForm";
import Items from "./Items";
const ListItems=()=> {
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState(0);
  const addTodo = (todo) => {
    if (!todo.text) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  function funcsetPriority(priority) {
    setPriority(priority);
  }
  console.log("priority is " + priority);
  return (
    <>
      <h1>Simple Wishlist Widget</h1>
      <ItemsForm onSubmit={addTodo} priority1={funcsetPriority} />
      <Items
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        priority1={funcsetPriority}
      />
    </>
  );
}
export default ListItems;