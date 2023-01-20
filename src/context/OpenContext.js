import { createContext, useState } from "react"

const OpenContext = createContext()

export const Provider = ({children}) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleIsOpenState = {
        isOpen,
        changeIsOpenState: (bool) => {
            setIsOpen(bool)
        }
    }
    return <OpenContext.Provider value={handleIsOpenState}>{children}</OpenContext.Provider>
}

export default OpenContext