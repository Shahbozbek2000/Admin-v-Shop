import React,{useState} from 'react'
import Editable from './TableEditAble'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Products = () => {
    const productInfo={
        name:'Product'
    }
    const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    //     console.log(newValue)
    // };

    return (
        <div className="admin-product">
            <div className="admin-product-edit">
                <Card className="admin-product-edit-add">
                    <h3>Add new Product</h3>
                    <TextField label="Product"/>
                    <TextField label="Product"/>
                    <TextField label="Product"/>
                    <TextField label="Product"/>
                    <span>
                        <img 
                            src="https://picsum.photos/100" 
                            alt="sads"
                        />
                        <input type="file"/>
                    </span>
                    <Button 
                        variant="contained" 
                        color="primary"
                    >
                        Add
                    </Button>
                </Card>
                <Card className="admin-product-edit-edit">

                </Card> 
            </div>
            <Editable productInfo={productInfo}/>
        </div>
    )
}

export default Products
