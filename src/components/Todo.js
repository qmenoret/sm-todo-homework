import React from "react";

const Todo = ({ text, complete, onClick }) => {
  return (
    <li
      onClick={onClick}
      style={{ textDecoration: complete ? "line-through" : "none", cursor: "pointer" }}
    >
      {text}
    </li>
  );
};

export default Todo;
