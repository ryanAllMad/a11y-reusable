import React, { useContext } from 'react'
import OpenContext from '../context/OpenContext'
import A11yReusable from '../parents/A11yReusable'

const Dialog = () => {
  const { changeIsOpenState } = useContext(OpenContext)
  const top = window.scrollY + 100 + 'px'
  const left = window.scrollX + 50 + '%'

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      changeIsOpenState(false)
    }
    if (e.shiftKey && e.key === 'Tab') {
      changeIsOpenState(false)
    }
  }
  const handleClick = () => {
    changeIsOpenState(false)
  }

  return (
    <A11yReusable
      tabIndex={'0'}
      ariaRole='dialog'
      ariaLabel='A regular modal'
      ariaModal={true}
      onKeyDown={handleKeyDown}
      style={{ top: `${top}`, left: `${left}` }}
    >
      <div>This is a dialog element.</div>
      <button onClick={handleClick}>Close</button>
    </A11yReusable>
  )
}
export default Dialog
