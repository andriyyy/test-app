import React from "react";
import ItemItem from "./ItemItem";

function ItemList(props) {
  const { items } = props;
  return items.map((item, key) => (
    <ItemItem key={key} item={item} {...props} />
  ));
}

export default ItemList;
