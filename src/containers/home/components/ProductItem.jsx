/** @format */

import { motion } from "framer-motion";
import React, { useState } from "react";
import useAddToCart from "../../../hooks/useAddToCart";
import { fadeInUp, GreenRipple } from "../../../utility";
import CircleProgressBar from "../../../components/layout/CircleProgressBar";

function ProductItem({ product }) {
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
    <motion.li
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      variants={fadeInUp}
      className='product-card p-6'>
      <figure className='bg-white'>
        <img src={product.pic} alt={product?.title} className='w-full' />
        <figcaption>
          <h6 className=''>{product?.title}</h6>
          <span className='extra-desc'>Green Fruit Jelly</span>
          <div className='desc'>
            <p>{product.desc}</p>
          </div>
          <div className='flex justify-between items-center'>
            <span className='item-price text-white text-xl'>
              {product?.price}$
            </span>
            <GreenRipple className='rounded-full oveflow-hidden flex justify-center items-center addtobasket'>
              <button
                onClick={handleAddToBasket}
                disabled={addLoader}
                className=' text-white text-base rounded-full flex justify-center items-center'>
                {showTick ? (
                  <motion.span
                    initial={{ opaciy: 0, y: -15 }}
                    animate={{ opaciy: 1, y: 0 }}
                    className='tick'></motion.span>
                ) : (
                  <span>
                    +
                  </span>
                )}
              </button>
              <CircleProgressBar is_show={addLoader} />
            </GreenRipple>
          </div>
        </figcaption>
      </figure>
      <style jsx>{``}</style>
    </motion.li>
  );
}

export default ProductItem;
