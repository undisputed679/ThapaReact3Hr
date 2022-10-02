import React from 'react'
import './Style.css'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import { useState } from 'react'
import NavBar from './NavBar'

const uniqueList = [
  ...new Set(
    Menu.map((curEle) => {
      return curEle.category
    })
  ),
  'All',
]


function Restraunt() {
  const [menuDate, SetMenuData] = useState(Menu)
  const [menuList, SetMenuList] = useState(uniqueList)
  const filterItem = (category) => {
    if(category==="All"){
      SetMenuData(Menu);
      return;
    }
    const updatedlist = Menu.filter((curEle) => {
      return curEle.category === category
    })
    SetMenuData(updatedlist)
  }

  

  return (
    <div>
      <NavBar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuDate} />
    </div>
  )
}

export default Restraunt
