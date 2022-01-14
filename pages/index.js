import fs from "fs";
import { Box, Button } from "theme-ui";
import React, { useEffect } from "react";
import { useSelector, connect } from "react-redux";

import { initTodos } from "../src/actions/todo.actions";

import AddTodo from "../src/containers/AddTodo";
import TodoList from "../src/containers/TodoList";
import Footer from "../src/containers/Footer";
import Container from "../src/layout/Container";


const App = ({ initialTodos, dispatch }) => {
  useEffect(() => {
    dispatch(initTodos(initialTodos))
  }, [initialTodos, dispatch])

  const todos = useSelector(state => state.todos)

  const onSave = () => {
    fetch("/api/save", {
      method: "POST",
      body: JSON.stringify({
        todos
      })
    })
  }
  return (
    <Box sx={{ height: "calc(100vh - 41px)" }}>
      <Container>
        <Button onClick={onSave} mb={2}>Save to FS</Button>
        <AddTodo />
        <TodoList />
        <Footer />
      </Container>
    </Box>
  )
}

export const getStaticProps = (data) => {
  try {
    const f = fs.readFileSync("./todos.json")
    return {
      props: {
        initialTodos: JSON.parse(f).todos
      }
    }
  } catch(e) {
    return {
      props: {
        initialTodos: []
      }
    }
  }
}

export default connect()(App)

