import React, { useContext } from "react"
import OpenContext from "../context/OpenContext"
import A11yReusable from "../parents/A11yReusable"


const Dialog = () => {

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
        <A11yReusable tabIndex={'0'} ariaRole='dialog' ariaLabel='A regular modal' ariaModal={true} onKeyDown={handleKeyDown}>
            <div>This is a dialog element.</div>
            <button onClick={handleClick}>Close</button>
        </A11yReusable>
    )
}
export default Dialog