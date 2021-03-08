import React,{useState} from 'react'
import Editable from './TableEditAble'

const Products = () => {
    const productInfo={
        name:'Product'
    }
    
    return (
        <div className="admin-product">
            <div className="admin-product-category">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <Editable 
                productInfo={productInfo}
                
            />
        </div>
    )
}

export default Products
