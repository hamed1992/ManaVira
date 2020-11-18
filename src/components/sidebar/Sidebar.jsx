/** @format */

import React from "react";
import SidebarCard from "./components/SidebarCard";
import map from "lodash/map";
import { motion } from "framer-motion";
import { stagger } from "../../utility";
const sidebar = [
  {
    id: 1,
    title: "Apple Fruit",
    desc: "Original Taste",
    pic: "/assets/images/p1.png",
    price: 10.0,
  },
  {
    id: 2,
    title: "Triple Fruit",
    desc: "Original Taste",
    pic: "/assets/images/p1.png",
    price: 10.0,
  },
  {
    id: 3,
    title: "Grape",
    desc: "Original Taste",
    pic: "/assets/images/p1.png",
    price: 10.0,
  },
];
function Sidebar() {
  return (
    <aside className='sidebar'>
      <h4 className='text-primary sidebar-title mb-10'>More Items</h4>
      <motion.div variants={stagger} initial="initial" animate="animate">
        {map(sidebar, (item, index) => (
          <SidebarCard key={index} product={item} />
        ))}
      </motion.div>
      <style jsx>
        {`
          .sidebar {
            min-width: 330px;
          }
        `}
      </style>
    </aside>
  );
}

export default Sidebar;
