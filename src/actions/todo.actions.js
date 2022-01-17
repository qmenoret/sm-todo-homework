import { v4 as uuidv4 } from 'uuid';


export const initTodos = todos => ({
  type: "INIT_TODO",
  todos
});

export const addTodo = text => ({
  type: "ADD_TODO",
  id: uuidv4(),
  complete: false,
  text
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const removeTodo = id => ({
  type: "REMOVE_TODO",
  id
});

export const filter = filter => ({
  type: "FILTER_TODO",
  filter
});

export const typeFilter = {
  SHOW_COMPLETE: "SHOW_COMPLETE",
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_ALL: "SHOW_ALL"
};
