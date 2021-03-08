import React,{useState} from 'react'
import Editable from './TableEditAble'

const Users = () => {
    const productInfo={
        name:'Xaridorlar'
    }
    
    return (
        <div>
            <Editable 
                productInfo={productInfo} 
               
            />
        </div>
    )
}

export default Users
