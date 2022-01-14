import React from "react";
import { addTodo } from "../actions/todo.actions";
import { connect } from "react-redux";
import Inp from "../components/Input";
import { Button, Flex } from "theme-ui";

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
      input.value = ""
    }
  };
  return (
    <React.Fragment>
      <Flex sx={{ height: "48px", alignItems: "center" }}>
        <Inp
          sx={{ height: "100%" }}
          type="text"
          placeholder="Add tests to this project"
          ref={(node) => (input = node)}
        />
        <Button id="add-todo" ml={2} sx={{ height: "100%", width: "120px" }} type="submit" onClick={onClick}>
          Add Todo
        </Button>
      </Flex>
    </React.Fragment>
  );
};

export default connect()(AddTodo);
