import React from "react";
import { Button } from "theme-ui";

import { connect } from "react-redux";
import { filter } from "../actions/todo.actions";

const Filters = {
  SHOW_ALL: "Show all",
  SHOW_ACTIVE: "Show active",
  SHOW_COMPLETE: "Show complete"
}

const ActionButton = ({ filter, txt, active, ...props }) => (
  <Button {...props}>
    {active ? `${txt} ✅` : txt}
  </Button>
)

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.filterTodo
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filter(ownProps.filter));
  }
});

const ConnectedButton = connect(mapStateToProps, mapDispatchToProps)(ActionButton);

const Footer = () => {
  return (
    <div>
      {
        Object.entries(Filters).map(([filter, txt]) => (
          <ConnectedButton
            variant="secondary"
            key={filter}
            filter={filter}
            mr={2}
            id={filter.toLowerCase()}
            sx={{ p: 1 }}
            txt={txt}
          />
        ))
      }
    </div>
  );
};

export default Footer
