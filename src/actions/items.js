export function itemsFetchDataSuccess(items) {
  return {
    type: "ITEMS_SET",
    items,
  };
}

export function itemsError(error) {
  return {
    type: "ITEMS_ERROR",
    error,
  };
}
export function itemsHasErrored(bool) {
  return {
    type: "ITEMS_HAS_ERRORED",
    hasErrored: bool,
  };
}

export function itemsIsLoading(bool) {
  return {
    type: "ITEMS_IS_LOADING",
    isLoading: bool,
  };
}

export function itemsFetchData() {
  return (dispatch, getState, { paragraf }) => {
    dispatch(itemsIsLoading(true));
    paragraf
      .items()
      .then((result) => {
        dispatch(itemsFetchDataSuccess(result));
        dispatch(itemsIsLoading(false));
      })
      .catch((error) => {
        itemsHasErrored(true);
        itemsError(error);
      });
  };
}
