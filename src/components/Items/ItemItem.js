import React from "react";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

function ItemItem(props) {
  const { item } = props;
  const onView = (key) => {
    props.history.push(`detailed/${key}`);
  };
  return (
    <TableRow key={item.uid}>
      <TableCell align="left">{item.id}</TableCell>
      <TableCell align="left">{item.title}</TableCell>
      <TableCell align="left">
        {item.description.replace(/^(.{200}[^\s]*).*/, "$1") + " ..."}
      </TableCell>
      <TableCell align="left">
        <IconButton onClick={() => onView(item.id)} aria-label="Info">
          <InfoIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default withRouter(ItemItem);
