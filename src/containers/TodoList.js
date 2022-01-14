import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/todo.actions";
import { Box } from "theme-ui";

const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos && todos.length ? (
        <ul>
          {
            todos.map((todo) => (
              <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            ))
          }
        </ul>
      ) : (
        <Box
          sx={{
            border: "1px solid #dad8d8",
            bg: "backgroundClear",
            my: 3,
            p: 2
          }}
        >
          Nothing to see here 🙁
        </Box>
      )}
    </div>
  );
};

const filterTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_COMPLETE":
      return todos.filter((todo) => todo.complete === true);
    case "SHOW_ACTIVE":
      return todos.filter((todo) => todo.complete === false);
    default:
      return todos;
  }
};

const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filterTodo)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
