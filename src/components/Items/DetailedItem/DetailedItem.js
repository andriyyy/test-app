import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { compose } from "recompose";
import IconButton from "@material-ui/core/IconButton";
import { Typography, Paper } from "@material-ui/core";

import KeyboardBackspace from "@material-ui/icons/KeyboardBackspace";
import { getItem, getItems, getId } from "../../../selectors/Selectors";

const StyledPaper = styled(Paper)`
  margin: 50px;
  padding: 50px;
`;
const StyledTypography = styled(Typography)`
  padding-bottom: 20px;
  font-weight: normal;
`;

function DetailedItem(props) {
  const onRedirect = (event) => {
    event.preventDefault();
    props.history.push(`/`);
  };

  const id = props.getId();

  const { title, description } = props.item(id);

  return (
    <StyledPaper>
      <div>
        <IconButton onClick={onRedirect} aria-label="Info">
          <KeyboardBackspace />
        </IconButton>
        <span>back</span>
        <StyledTypography component="h2" variant="h5">
          Detailed info
        </StyledTypography>
        <p>
          <b>Title: &nbsp;</b>
        </p>
        <p>{title}</p>

        <p>
          <b>Description:&nbsp;</b>
        </p>
        <p>{description}</p>
      </div>
    </StyledPaper>
  );
}

const mapStateToProps = (state, ownProps) => ({
  item: (id) => {
    return getItem(id, getItems(state));
  },
  getId: () => {
    return getId(ownProps);
  },
});

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(DetailedItem);
