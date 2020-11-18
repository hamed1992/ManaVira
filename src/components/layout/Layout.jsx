/** @format */

import React, { useState, createContext, useEffect } from "react";
import Header from "../header/Header";
export const basket = createContext([]);
export const basketDispatch = createContext([]);
function Layout({ children }) {
  const [state, setState] = useState([]);
  useEffect(() => {
    var existingEntries = JSON.parse(localStorage.getItem("basket"));
    existingEntries !== null && setState(existingEntries);
  }, []);
  return (
    <div className='main'>
      <basket.Provider value={state}>
        <basketDispatch.Provider value={setState}>
          <Header />

          <span className='bg-pic'></span>
          {children}
          <style>
            {`
                
                `}
          </style>
        </basketDispatch.Provider>
      </basket.Provider>
    </div>
  );
}

export default Layout;
