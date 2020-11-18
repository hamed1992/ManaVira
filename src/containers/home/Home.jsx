/** @format */

import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { map } from "lodash";
import ProductItem from "./components/ProductItem";
import { motion } from "framer-motion";
import { stagger } from "../../utility";
const products = [
  {
    id: 11,
    title: "Lotus Jar",
    pic: "/assets/images/jam.png",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    price: "4,00",
  },
  {
    id: 22,
    title: "Lotus Mini",
    pic: "/assets/images/jam.png",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    price: "2,00",
  },
];
function Home() {
  return (
    <div>
      <div className='flex justify-between'>
        <div className='flex flex-grow flex-col max-w-screen-lg'>
          <motion.h1
            initial={{opacity:0,}}
            animate={{opacity:1,}}
            transition={{delay:0,duration:.3}}
           className='text-white font-bold text-6xl flex justify-between items-center pr-20' style={{width:"85%"}}>
            <span>Best Sellers</span>
            <span className='circle-btn flex items-center justify-center'>
              <span className='line'></span>
            </span>
          </motion.h1>
          <motion.ul variants={stagger} initial="initial" animate="animate" transition={{delay:3}} className='flex-grow pr-20 flex justify-start items-center'>
            {map(products, (product, index) => {
              return <ProductItem product={product} key={index} />;
            })}
          </motion.ul>
        </div>
        <Sidebar />
      </div>
      <style jsx>
        {`
          .circle-btn {
            width: 49px;
            height: 49px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0px 10px 10px #44d0d2;
            position: relative;
          }
          .circle-btn .line {
            width: 24px;
            height: 6px;
            background: #3fbfb5;
            border-radius: 3px;
          }
        `}
      </style>
    </div>
  );
}

export default Home;
