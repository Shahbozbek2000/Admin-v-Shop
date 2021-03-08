import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
}));

const Messeges = () => {
    const classes = useStyles();
    const [messege, setMessege] = useState(
        [
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
            {text:'lorem Lorem ipsum dolor sit. Lorem ipsum dolor sit.'},
        ]
    )
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [image, setImage] = useState({})
    console.log(image)
    // const [url, setUrl] = useState()
    const sendDataChange =()=>{
        const reader = new FileReader();
        reader.readAsDataURL(image)
        console.log(reader.readAsDataURL(image))
        // setUrl(reader.readAsDataURL(image))
        // const fd = new FormData()
        // fd.append('image', image, image.name)
        // axios.post('https://api.cloudinary.com/v1_1/abcde/upload', fd)
        //     .then(res=>console.log(res))
        //     .catch(err=>console.log(err))
    }

    return (
        <div className="messege-wrapper">
            <h2>Xabarlar</h2>
            <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            <button onClick={sendDataChange}>Send</button>
            {/* <img src={} alt="sda"/> */}
            <br/>
            <div className={classes.root}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                >
                <Typography className={classes.heading}>General settings</Typography>
                <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                    maximus est, id dignissim quam.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
                >
                <Typography className={classes.heading}>Users</Typography>
                <Typography className={classes.secondaryHeading}>
                    You are currently not an owner
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar
                    diam eros in elit. Pellentesque convallis laoreet laoreet.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
                >
                <Typography className={classes.heading}>Advanced settings</Typography>
                <Typography className={classes.secondaryHeading}>
                    Filtering has been entirely disabled for whole web server
                </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
                >
                <Typography className={classes.heading}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                </Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </div>
    )
}

export default Messeges
