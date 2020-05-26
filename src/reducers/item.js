import * as R from "ramda";
const INITIAL_STATE = {
  items: null,
  itemsGetErrored: false,
  itemsIsLoading: false,
};

const applySetItems = (state, action) =>
  R.merge(state, { items: action.items });

const applySetItemsHasErrored = (state, action) =>
  R.merge(state, { itemsGetErrored: action.hasErrored });

const applyItemsIsLoading = (state, action) =>
  R.merge(state, { itemsIsLoading: action.isLoading });

function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ITEMS_SET": {
      return applySetItems(state, action);
    }

    case "ITEMS_HAS_ERRORED": {
      return applySetItemsHasErrored(state, action);
    }
    case "ITEMS_IS_LOADING": {
      return applyItemsIsLoading(state, action);
    }

    default:
      return state;
  }
}

export default itemReducer;
