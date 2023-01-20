/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import Dialog from './Dialog'
import OpenContext from '../context/OpenContext'
import OpenButton from '../parents/OpenButton'

const DialogTab = () => {
    const { isOpen, changeIsOpenState } = useContext(OpenContext)
    const [tabbed, setTabbed] = useState('0')
  
    useEffect(() => {
      changeIsOpenState(false)
    }, [])
    useEffect(() => {
      if(!isOpen) {
        setTabbed('0')
      }
    }, [isOpen])
  
    const handleOnClick = () => {
      setTabbed('-1')
      changeIsOpenState(true)
    }

    return (
    <div id='dialog-modal' className='dialog modal' role="tabpanel" aria-labelledby='show-modal'>
      <h3>Dialog/Modal Component Tab Panel</h3>
      <p>
            Click or hit enter on the button below to render the dialog component.
      </p>
      <p>Hit tab to navigate into the dialog.</p>
      <p>Hit escape or shift + tab to close the dialog.</p>
      <OpenButton id='open-dialog' tabIndex={tabbed} onClick={handleOnClick}>Open dialog modal</OpenButton>
      {isOpen && <Dialog/>}
      </div>
    )
}
export default DialogTab