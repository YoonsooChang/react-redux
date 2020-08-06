import React from "react";
import { connect } from "react-redux";

function Detail({ toDo }) {
  console.log(toDo);
  return (
    <>
      <h1>Detail</h1>
      <h5>Created at : {toDo?.id}</h5>
      <div>{toDo?.text}</div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
