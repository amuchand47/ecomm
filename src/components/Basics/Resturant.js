import React, { useEffect, useState } from "react";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

import "./style.css";

const uniqueList = [ ...new Set(Menu.map((elem)=>{return elem.category}))];

console.log(uniqueList)


const Resturant = () => {

  const [menuData, setmenuData] = useState(Menu);

  const [menuList, setmenuList] = useState(uniqueList);


  const filterItem = (category) => {
    const updatedList = Menu.filter((elem) => {
      return elem.category === category;
    });

    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
