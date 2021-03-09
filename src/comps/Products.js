import React,{useState} from 'react'
import Editable from './TableEditAble'
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const Products = () => {
    const [openAdd, setOpenAdd] = useState(false);
    const handleClickAdd = () => {
        setOpenAdd(!openAdd);
    }

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    }

    const productInfo={
        name:'Product'
    }

    return (
        <div className="admin-product">
            <div>
                <ListItem button onClick={handleClickAdd}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mahsulot qo'shish" />
                    {openAdd ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openAdd} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button >
                            <div className="admin-product-edit">
                                <Card className="admin-product-edit-add">
                                    <div>
                                        <TextField className="textInput" label="Product"/>
                                        <TextField className="textInput" label="Ma'lumot"/>
                                        <TextField className="textInput" label="Narx"/>
                                        <TextField className="textInput" label="Kategoriya"/>
                                    </div>
                                    <div>
                                        <span className="admin-add-img">
                                            <img 
                                                src="https://picsum.photos/400/200"
                                                alt="sads"
                                            />
                                            <input type="file"/>
                                        </span>
                                        <Button
                                            className="btn-admin-add" 
                                            variant="contained" 
                                            color="primary"
                                        >
                                            Add
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                    </ListItem>
                    </List>
                </Collapse>
            </div>
            <div>
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                    <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Mahsulotni yangilash" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                    <ListItem button >
                            <div className="admin-product-edit">
                                <Card className="admin-product-edit-add">
                                    <div>
                                        <TextField className="textInput" label="Product"/>
                                        <TextField className="textInput" label="Ma'lumot"/>
                                        <TextField className="textInput" label="Narx"/>
                                        <TextField className="textInput" label="Kategoriya"/>
                                    </div>
                                    <div>
                                        <span className="admin-add-img">
                                            <img 
                                                src="https://picsum.photos/400/200"
                                                alt="sads"
                                            />
                                            <input type="file"/>
                                        </span>
                                        <Button
                                            className="btn-admin-add" 
                                            variant="contained" 
                                            color="primary"
                                        >
                                            Yangilash
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                    </ListItem>
                    </List>
                </Collapse>
            </div>
            <Editable productInfo={productInfo}/>
        </div>
    )
}

export default Products
