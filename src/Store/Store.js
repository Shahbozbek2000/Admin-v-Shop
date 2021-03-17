import React,{createContext} from 'react'

export const StoreG = createContext()

const Store = (props) => {

    const obj = {
        ab:1,
        bv:2
    }

    return (
        <StoreG.Provider
            value={{obj}}
        >
            {props.children}
        </StoreG.Provider>
    )
}

export default Store
