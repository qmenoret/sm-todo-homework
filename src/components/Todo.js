import React from "react";
import { Flex, Button } from "theme-ui"

const Todo = ({ text, complete, onClick, onRemove }) => {
  return (
    <Flex
      as="li"
      sx={{
        alignItems: "center",
        justifyContent: "space-between",
        listStyle: "circle"
      }}
    >
      <Button
        variant="transparent"
        onClick={onClick}
        sx={{
          textDecoration: complete ? "line-through" : "none",
          color: "text"
        }}
      >
        {text}
      </Button>
      <Button
        variant="transparent"
        onClick={onRemove}
      >
        delete
      </Button>
    </Flex>
  );
};

export default Todo;
