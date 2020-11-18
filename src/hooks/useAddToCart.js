/** @format */

import React, { useEffect, useState } from "react";
import { useBasketDispatch } from "./../hooks";
function useAddToCart(initialValue = -1, product) {
  const [count, setCount] = useState(-1);
  const [loaded, setLoaded] = useState(false);
  let basketDispach= useBasketDispatch();
  const localage = loaded && localStorage;
  var existingEntries = loaded && JSON.parse(localage.getItem("basket"));
  if (existingEntries == null) existingEntries = [];
  useEffect(() => {
    count > -1 && addProductToBasket(count, product);
    setLoaded(true);
    const fineElem =
      existingEntries &&
      existingEntries.filter((x) => x.id === product.id);
    setDefaultValue(fineElem.count);
  }, [count]);
  useEffect(() => {
    const fineElem =
      existingEntries &&
      existingEntries.filter((x) => x.id === product.id);
    setDefaultValue(initialValue);
  }, []);
  const setDefaultValue = (countItem = 0) => {
    countItem > 0 && setCount(countItem);
  };

  var entry = {
    count: count,
    title: product?.title, 
    id: product?.id,
    pic: product?.pic,
  };
  const increment = () => {
    setCount((prev) => (prev === -1 ? 1 : prev + 1));
  };
  const decrement = () => {
   
        setCount((prev) => Math.max(0, prev - 1))
      
  };
  function addProductToBasket(counter = 0, product={}) {
    const found = existingEntries?.some((el) => el.id === entry.id);
    !found
      ? existingEntries.push(entry)
      : existingEntries.filter((el, i) => {
          return el.id === product.id
            ? counter !== 0
              ? (el.count = counter)
              : existingEntries.splice(i, 1)
            : el;
        }),
      localStorage.setItem("basket", JSON.stringify(existingEntries));
    basketDispach(existingEntries);
  }
  const reset = () => {
    setCount(-1);
  };
  const handleSetState = (item) => {
    setCount(item);
  };
  return [count, increment, reset, handleSetState, setCount];
}

export default useAddToCart;
