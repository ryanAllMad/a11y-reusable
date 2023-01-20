/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Menu from './Menu'
import OpenContext from '../context/OpenContext'
import OpenButton from '../parents/OpenButton'


const MenuTab = () => {
    const { isOpen, changeIsOpenState } = useContext(OpenContext)
    const [ariaIsExpanded, setAriaIsExpanded] = useState(false)
  
    useEffect(() => {
      changeIsOpenState(false)
    }, [])
    useEffect(() => {
      if(!isOpen) {
        setAriaIsExpanded(false)
      }
    }, [!isOpen])
  
    const handleOnClick = () => {
      changeIsOpenState(true)
      setAriaIsExpanded(true)
    }
    const handleKeyDown = (e) => {
      if(e.key === 'Escape') {
        setAriaIsExpanded(false)
      }
    }
    return (
      <div
        id='menu-tab'
        className='menu modal'
        role='tabpanel'
        aria-labelledby='show-menu'
        onKeyDown={handleKeyDown}
      >
        <h3>Menu Component Tab Panel</h3>
        <p>
          Click or hit enter on the button below to render the menu component.
        </p>
        <p>
          Hit tab then arrow down or up.
        </p>
        <p> 
          Hit enter to select an item from the menu.
        </p>
        <OpenButton
          id='open-menu'
          ariaExpanded={ariaIsExpanded}
          ariaHasPopup='menu'
          ariaControls='menu'
          tabIndex={'0'}
          onClick={handleOnClick}
        >
          Open menu
        </OpenButton>
        {isOpen && <Menu />}
      </div>
    )
}
export default MenuTab