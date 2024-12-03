"use client";
import { createContext, useContext, useReducer } from "react";
import { Reducer, initialState } from "./Reducer";
import Filter_Reducer from "./Filter_Reducer";

const Context = createContext();
const Store = ({ children }) => {
  const [product, dis] = useReducer(Reducer, initialState);
  const x = 10;
  const [filter, dispatch_filter] = useReducer(Filter_Reducer, {
    sort: null,
    rate: null,
    price_range: [0, 1000],
    category: null,
  });
  return (
    <Context.Provider value={{ product, dis, filter, dispatch_filter, x }}>
      {children}
    </Context.Provider>
  );
};

export const Use_product_state = () => useContext(Context);

export default Store;
