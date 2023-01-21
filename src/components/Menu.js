import React, { useContext } from 'react'
import OpenContext from '../context/OpenContext'
import A11yReusable from '../parents/A11yReusable'
import MenuItem from './MenuItem'

const Menu = () => {
  const { changeIsOpenState } = useContext(OpenContext)
  const moveFocusDown = () => {
    const menu = document.querySelector('#menu')
    const menuItems = document.querySelector('#menu').childNodes
    const activeItem = document.activeElement
    for (let i = 0; i < menuItems.length; i++) {
      const listLength = menuItems.length
      if (
        activeItem === menuItems[i] &&
        activeItem !== menuItems[listLength - 1]
      ) {
        menuItems[i + 1].focus()
      }
      if (activeItem === menu) {
        menuItems[0].focus()
      }
    }
  }
  const moveFocusUp = () => {
    const menuItems = document.querySelector('#menu').childNodes
    const activeItem = document.activeElement
    for (let i = 0; i < menuItems.length; i++) {
      if (activeItem === menuItems[i] && activeItem !== menuItems[0]) {
        menuItems[i - 1].focus()
      }
    }
  }
  const handleKeyDown = (e) => {
    // escape closes menu
    if (e.key === 'Escape') {
      changeIsOpenState(false)
    }
    if (e.key === 'ArrowDown') {
      moveFocusDown()
    }
    if (e.key === 'ArrowUp') {
      moveFocusUp()
    }
  }

  return (
    <A11yReusable
      id='menu'
      tabIndex={0}
      ariaRole='menu'
      ariaLabel='A menu'
      onKeyDown={handleKeyDown}
    >
      <MenuItem>Item one</MenuItem>
      <MenuItem>Item two</MenuItem>
      <MenuItem>Item three</MenuItem>
      <MenuItem>Item four</MenuItem>
    </A11yReusable>
  )
}

export default Menu
