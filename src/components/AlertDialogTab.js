/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import AlertDialog from './AlertDialog'
import OpenContext from '../context/OpenContext'
import OpenButton from '../parents/OpenButton'

const AlertDialogTab = () => {
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
    <div id='alert-modal' className='alert modal' role="tabpanel" aria-labelledby='show-alert'>
      <h3>Alert Dialog Component Tab Panel</h3>
      <p>
            Click or hit enter on the button below to render the dialog component.
      </p>
      <p>Hit tab to navigate into the dialog.</p>
      <p>Hit escape or shift + tab to close the dialog.</p>
      <OpenButton id='open-alert' tabIndex={tabbed} onClick={handleOnClick}>Open alert modal</OpenButton>
      {isOpen && <AlertDialog/>}
      </div>
    )
}
export default AlertDialogTab