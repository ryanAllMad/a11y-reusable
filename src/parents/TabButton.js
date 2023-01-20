/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useContext, useEffect } from 'react'
import TabContext from '../context/TabContext'

const TabButton = ({ children, id, ariaControls, onKeyDown }) => {
  const {
    changeModalIsOpenState,
    changeAlertIsOpenState,
    changeMenuIsOpenState,
  } = useContext(TabContext)
  const tabButton = useRef(null)
  const [ariaIsSelected, setAriaIsSelected] = useState(false)

  useEffect(() => {
    changeModalIsOpenState(false)
    changeAlertIsOpenState(false)
    changeMenuIsOpenState(false)
  }, [])

const handleBlur = () => {
  setAriaIsSelected(false)
}
  const handleFocus = () => {
    setAriaIsSelected(true)
    if (tabButton.current.innerText.includes('dialog')) {
      changeModalIsOpenState(true)
      changeAlertIsOpenState(false)
      changeMenuIsOpenState(false)
    }
    if (tabButton.current.innerText.includes('alert')) {
      changeAlertIsOpenState(true)
      changeModalIsOpenState(false)
      changeMenuIsOpenState(false)
    }
    if (tabButton.current.innerText.includes('menu')) {
      changeMenuIsOpenState(true)
      changeModalIsOpenState(false)
      changeAlertIsOpenState(false)
    }
  }

  return (
    <button
      id={id}
      role='tab'
      ref={tabButton}
      aria-selected={ariaIsSelected}
      aria-controls={ariaControls}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={onKeyDown}
    >
      {children}
    </button>
  )
}

export default TabButton
