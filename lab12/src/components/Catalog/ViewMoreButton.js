import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { Button } from "./ViewMoreButton.styled";

function ViewMoreButton(props) {
  let match = useRouteMatch();

  return (
    <Link to={`${match.url}/${props.id}}`}>
      <Button />
    </Link>
  );
}

export default ViewMoreButton;
