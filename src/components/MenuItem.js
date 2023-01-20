import React, { useContext, useRef } from "react"
import A11yReusable from "../parents/A11yReusable"
import OpenContext from '../context/OpenContext'


const MenuItem = ({children}) => {
    const { changeIsOpenState } = useContext(OpenContext)
    const menuItem = useRef(null)

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            changeIsOpenState(false)
            alert(`Selected Item was ${menuItem.current.innerText}`)
        }
    }
    const handleClick = () => {
        changeIsOpenState(false)  
        alert(`Selected Item was ${menuItem.current.innerText}`)
    }

    return (
        <A11yReusable ref={menuItem} ariaRole='menuitem' tabIndex='-1' onKeyDown={handleKeyDown} onClick={handleClick} >
            {children}
        </A11yReusable>
    )

}

export default MenuItem