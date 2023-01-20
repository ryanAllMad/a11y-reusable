import React, { useContext } from "react"
import A11yReusable from "../parents/A11yReusable"
import OpenContext from "../context/OpenContext"

const AlertDialog = () => {

    const { changeIsOpenState } = useContext(OpenContext)

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
        <A11yReusable tabIndex={'0'} ariaRole='alertdialog' ariaLabel='An alert modal' ariaModal={true} onKeyDown={handleKeyDown}>
            <div>There is something important here.</div>
            <button onClick={handleClick}>Close</button>
        </A11yReusable>
    )
}

export default AlertDialog