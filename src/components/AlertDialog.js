import React, { useContext } from "react"
import A11yReusable from "../parents/A11yReusable"
import OpenContext from "../context/OpenContext"

const AlertDialog = () => {

    const { changeIsOpenState } = useContext(OpenContext)
    const top = window.scrollY + 100 + 'px'
    const left = window.scrollX + 50 + '%'

    const handleKeyDown = (e) => {
    if(e.key === 'Escape') {    
        changeIsOpenState(false)
    }
    if(e.shiftKey && e.key === 'Tab') {
        changeIsOpenState(false)
    }
    }
    const handleClick = () => {
        changeIsOpenState(false)
    }
    

    return (
        <A11yReusable tabIndex={'0'} ariaRole='alertdialog' ariaLabel='An alert modal' ariaModal={true} onKeyDown={handleKeyDown} style={{top: `${top}`, left: `${left}`}}>
            <div>There is something important here.</div>
            <button onClick={handleClick}>Close</button>
        </A11yReusable>
    )
}

export default AlertDialog