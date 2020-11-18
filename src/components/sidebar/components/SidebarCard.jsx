/** @format */

import React, { useState } from "react";
import { fadeIn, fadeInRight, GreenRipple } from "../../../utility";
import useAddToCart from "../../../hooks/useAddToCart";
import { motion } from "framer-motion";
import CircleProgressBar from "../../layout/CircleProgressBar";
function SidebarCard({ product }) {
  const [addLoader, setAddLoader] = useState(false);
  const [showTick, setShowTick] = useState(false);
  const [count, increment, setDefaultValue] = useAddToCart(0, product);
  const handleAddToBasket = () => {
    setAddLoader(true);
    increment();
    setTimeout(() => {
      setAddLoader(false);
      setShowTick(true);
      setTimeout(() => {
        setShowTick(false);
      }, 1500);
    }, 2000);
  };
  return (
    <motion.div
      variants={fadeInRight}
      className='bg-white sidebar-card mb-10 relative card-frame'>
      <div className='card-holder'>
        <figure className='flex justify-start items-center'>
          <img src={product.pic} alt='pic' className='w-20 h-20 rounded-full' />
          <figcaption className='flex flex-col pl-6'>
            <h6 className='text-primary text-base font-semibold mb-2'>
              {product?.title}
            </h6>
            <span className='text-gray-500 text-md'>{product?.desc}</span>
          </figcaption>
        </figure>
        <span className='price-item'>${product?.price}</span>
        <div className='absolute add-btn'>
          <GreenRipple className='rounded-full oveflow-hidden flex justify-center items-center'>
            <button
              onClick={handleAddToBasket}
              disabled={addLoader}
              className='text-white text-base rounded-full flex justify-center items-center'>
              {showTick ? (
                <motion.span
                  initial={{ opaciy: 0, y: -15 }}
                  animate={{ opaciy: 1, y: 0 }}
                  className='tick'></motion.span>
              ) : (
                <span >
                  +
                </span>
              )}
            </button>
            <CircleProgressBar is_show={addLoader} />
          </GreenRipple>
        </div>
      </div>
      <style jsx>{``}</style>
    </motion.div>
  );
}

export default SidebarCard;
