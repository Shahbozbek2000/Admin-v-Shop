import React,{createContext} from 'react'
import userDB from '../Json-Data/Users.json'
export const StoreG = createContext()

const Store = (props) => {

    const userData = userDB.users

    const obj = {
        ad:'1rw',
        asdf:'1rw',
    }
    
    return (
        <StoreG.Provider
            value={
                {
                    obj,
                    userData
                }
            }
        >
            {props.children}
        </StoreG.Provider>
    )
}

export default Store
