/** @format */

import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useBasket, useBasketDispatch } from "../../hooks";
import map from "lodash/map";
import useComponentVisible from "../../hooks/useComponentVisible";
import useAddToCart from "../../hooks/useAddToCart";

function Header() {
  const [search, setSearch] = useState("");
  const basketStorage = useBasket();
  let basketDispach = useBasketDispatch();
  const [basket, setBasket] = useState(basketStorage);
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useComponentVisible(false);

  useEffect(() => {
    setBasket(basketStorage);
  }, [basketStorage]);

  const handleSubmit = (e) => {
    console.log("ASdas");
    e.preventDefault();
  };
  const handleShowBasket = () => {
    basket && basket?.length > 0 && setIsComponentVisible((prev) => !prev);
  };
  const handleRemoveItem = (id) => {
    var existingEntries = JSON.parse(localStorage.getItem("basket"));
    const found = existingEntries?.some((el) => el.id === id);
    console.log(existingEntries,found)
    found ? existingEntries = existingEntries.filter((el) => {return el.id !== id}) : existingEntries;
    localStorage.setItem("basket", JSON.stringify(existingEntries));
    console.log(existingEntries)
    basketDispach(existingEntries);
  };
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='flex justify-between items-center'>
      <img src='/assets/images/logo.svg' alt='logo' />

      <div className='flex flex-start items-center'>
        <form
          onSubmit={handleSubmit}
          className='relative border border-gray-400 rounded-full overflow-hidden'>
          <input
            type='text'
            className='search-box px-3 text-sm text=primary flex flex-start items-center rounded-full'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search.trim() === "" && (
            <span className='placeholder text-primary text-md font-bold'>
              search
            </span>
          )}
          <input type='submit' className='search-btn' value='' />
        </form>
        <div className='relative' ref={ref}>
          {basket.length > 0 && (
            <span
              className='absolute bg-red-600 rounded-full text-xs top-0 w-4 h-4 flex justify-center items-center'
              style={{ right: 0, top: -5, color: "#fff", fontSize: 10 }}>
              {basket.length}
            </span>
          )}
          <img
            src='/assets/images/basket.svg'
            alt='basket'
            onClick={handleShowBasket}
            className='bsaketIcon cursor-pointer'
          />
          {isComponentVisible && basket?.length > 0 && (
            <div className='cart-box p-1'>
              {map(basket, (item, index) => {
                return (
                  <figure
                    key={index}
                    className='text-green-900 flex justify-start items-center p-2 mb-2 border-b border-gray-300'>
                    <img
                      src={item?.pic}
                      alt={item?.name}
                      className='w-12 h-12 rounded-full object-cover object-center'
                    />
                    <figcaption className='flex flex-col px-2 relative flex-grow'>
                      <span className='text-green-800 text-md'>
                        {item?.title}
                      </span>
                      <span
                        onClick={() => handleRemoveItem(item?.id)}
                        className='absolute cursor-pointer px-1 rounded-md  bg-red-500 text-white text-xs flex justify-center items-center top-0 right-0'>
                        remove
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <style jsx>
        {`
          .cart-box {
            width: 250px;
            height: 200px;
            background: #fff;
            box-shadow: -9px 0px 29px rgba(229, 229, 229, 0.5);
            position: absolute;
            right: 0;
            top: 45px;
            z-index: 55;
            overflow-y: auto;
          }
          .search-btn {
            width: 20px;
            height: 20px;
            background: url("/assets/images/magnify.svg") center center
              no-repeat;
            position: absolute;
            right: 15px;
            top: 13px;
            background-size: contain;
          }
          .bsaketIcon {
            margin-left: 45px;
          }
          .search-box {
            width: 261px;
            height: 45px;
          }
          .search-box:focus ~ .placeholder {
            opacity: 0;
          }
          .placeholder {
            position: absolute;
            left: 17px;
            top: 11px;
            font-weight: 500;
            pointer-events: none;
            transition: all ease 0.3s;
          }
          .magnify {
            position: absolute;
            right: 15px;
            top: 13px;
            padding: 2px;
          }
        `}
      </style>
    </motion.header>
  );
}

export default Header;
