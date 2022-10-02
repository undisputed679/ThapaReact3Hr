import React from 'react'
import Menu from './MenuApi'

function NavBar({ filterItem, menuList }) {
  return (
    <div>
      <nav className='navbar'>
        <div className='btn-group'>
          {menuList.map((curElm) => {
            return (
              <button
                className='btn-group__item'
                onClick={() => filterItem(curElm)}
              >
                {curElm}
              </button>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

export default NavBar
