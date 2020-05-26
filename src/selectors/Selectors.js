// Selectors
function getItems(state) {
  console.log(state.itemState);
  if (state.itemState.items !== null) {
    return state.itemState.items;
  } else {
    return false;
  }
}

function getItemsIsLoading(state) {
  return state.itemState.itemsIsLoading;
}

function getItemsHasErrored(state) {
  return state.itemState.itemsGetErrored;
}
function getItemsError(state) {
  return state.itemState.itemsError;
}

function getItem(id, items) {
  let elem = null;
  if (items) {
    items.forEach(function (element) {
      if (id === element.id) {
        elem = element;
      }
    });
    return elem;
  } else {
    return false;
  }
}
function getId(ownProps) {
  return ownProps.match.params.id;
}
export {
  getItems,
  getItemsHasErrored,
  getItemsIsLoading,
  getItem,
  getItemsError,
  getId,
};
