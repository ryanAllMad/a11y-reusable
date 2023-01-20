import { createContext, useState } from "react"

const TabContext = createContext()

export const Provider = ({children}) => {
    const [modalIsOpen, setModalIsOpen] = useState(true)
    const [alertIsOpen, setAlertIsOpen] = useState(true)
    const [menuIsOpen, setMenuIsOpen] = useState(true)
    const handleIsOpenState = {
        modalIsOpen,
        alertIsOpen,
        menuIsOpen,
        changeModalIsOpenState: (bool) => {
            setModalIsOpen(bool)
        },
        changeAlertIsOpenState: (bool) => {
            setAlertIsOpen(bool)
        },
        changeMenuIsOpenState: (bool) => {
            setMenuIsOpen(bool)
        }
    }
    return <TabContext.Provider value={handleIsOpenState}>{children}</TabContext.Provider>
}

export default TabContext