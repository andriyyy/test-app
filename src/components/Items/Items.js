import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as R from "ramda";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography, Paper } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";
import { itemsFetchData } from "../../actions/items";
import SearchPanel from "../SearchPanel";
import ItemList from "./ItemList";
import {
  getItems,
  getItemsHasErrored,
  getItemsIsLoading,
  getItemsError,
} from "../../selectors/Selectors";

const StyledPaper = styled(Paper)`
  margin: 50px;
  padding: 50px;
`;
const StyledTypography = styled(Typography)`
  padding-bottom: 20px;
  font-weight: normal;
`;
const StyledTable = styled(Table)`
  margin: 20px;
`;

function Items(props) {
  const [term, setTerm] = useState("");
  const limit = 5;
  const [page, setPage] = useState(1);
  const { items } = props;

  useEffect(() => {
    props.itemsFetchData();
  }, []);

  const onSearchChange = (term) => {
    setTerm(term);
  };

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return (
        item.title.indexOf(term) > -1 || item.description.indexOf(term) > -1
      );
    });
  };

  const visibleItems = search(items, term);

  const handleChangePage = (page) => {
    setPage(page);
  };

  if (props.isItemsLoading === true) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (props.isItemsErrored === true) {
    return <p>Can not load Items: {props.itemsError}</p>;
  }

  return (
    <div>
      <StyledPaper>
        <StyledTypography component="h2" variant="h5">
          Home Page
        </StyledTypography>
        <SearchPanel onSearchChange={onSearchChange} />
        <StyledTable>
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Title</TableCell>
              <TableCell align="center">Description</TableCell>
              <TableCell align="center">More</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items && (
              <ItemList
                items={R.slice(
                  (page - 1) * limit,
                  (page - 1) * limit + limit,
                  visibleItems
                )}
              />
            )}
          </TableBody>
        </StyledTable>
        <Pagination
          count={Math.ceil(visibleItems.length / limit)}
          color="primary"
          page={page}
          onChange={(e, page) => handleChangePage(page)}
        />
      </StyledPaper>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: getItems(state),
  isItemsLoading: getItemsIsLoading(state),
  isItemsErrored: getItemsHasErrored(state),
  itemsError: getItemsError(state),
});

const mapDispatchToProps = (dispatch) => ({
  itemsFetchData: () => dispatch(itemsFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);
