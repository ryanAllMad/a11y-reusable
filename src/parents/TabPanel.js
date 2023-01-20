import React, { useContext } from 'react'
import A11yReusable from './A11yReusable'
import TabButton from './TabButton'
import AlertDialogTab from '../components/AlertDialogTab'
import DialogTab from '../components/DialogTab'
import MenuTab from '../components/MenuTab'
import TabContext from '../context/TabContext'

const TabPanel = () => {
  const {
    modalIsOpen,
    alertIsOpen,
    menuIsOpen
  } = useContext(TabContext)
  // controls arrow left and right
  const moveFocusUp = () => {
    const tabItems = document.querySelector('[role="tablist"]').childNodes
    const activeItem = document.activeElement
    for (let i = 0; i < tabItems.length; i++) {
      if (activeItem === tabItems[i] && activeItem !== tabItems[0]) {
        tabItems[i - 1].focus()
      }
    }
  }
  const moveFocusDown = () => {
    const tabItems = document.querySelector('[role="tablist"]').childNodes
    const activeItem = document.activeElement
    for (let i = 0; i < tabItems.length; i++) {
      const listLength = tabItems.length
      if (
        activeItem === tabItems[i] &&
        activeItem !== tabItems[listLength - 1]
      ) {
        tabItems[i + 1].focus()
      }
    }
  }
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      moveFocusUp()
    }
    if (e.key === 'ArrowRight') {
      moveFocusDown()
    }
  }
  const handleOnKeyDown = (e) => {
    const tabPanels = document.querySelector('#tab-panels')
    if(e.key === 'ArrowDown') {
      tabPanels.focus()
    }
  }


  return (
    <div>
      <A11yReusable ariaRole='tablist' onKeyDown={handleKeyDown}>
        <TabButton
          id='show-modal'
          ariaControls='dialog-modal'
          onKeyDown={handleOnKeyDown}
        >
          Render the dialog modal app
          <span className="arrow right">&#9654;</span>
          <span className="arrow down">&#9660;</span>
        </TabButton>
        <TabButton id='show-alert' ariaControls='alert-modal' onKeyDown={handleOnKeyDown}>
        <span className="arrow left">&#9664;</span>
          Render the alert modal
          <span className="arrow right">&#9654;</span>
          <span className="arrow down">&#9660;</span>
        </TabButton>
        <TabButton id='show-menu' ariaControls='menu-tab' onKeyDown={handleOnKeyDown}>
        <span className="arrow left">&#9664;</span>
          Render the menu
        <span className="arrow down">&#9660;</span>
        </TabButton>
      </A11yReusable>
      <A11yReusable id="tab-panels" ariaRole="region" ariaLabel="App Components" tabIndex={0}>
        {modalIsOpen && <DialogTab />}
        {alertIsOpen && <AlertDialogTab />}
        {menuIsOpen && <MenuTab />}
      </A11yReusable>
    </div>
  )
}

export default TabPanel
