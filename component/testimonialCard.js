import React from 'react'
import classes from "../styles/whatsappbtn.module.css"
import { Image } from '@chakra-ui/image'
function testimonialCard(props) {
    return (
        <div className={classes.test}>
        
        <div className={classes.images}>
        <Image className={classes.testImg} src={props.img}/>
        <Image className={classes.logo} src={props.logo}/>
        </div>
        <div className={classes.data}>
        <p className={classes.text}>{props.text}</p>
        <h2>{props.name}</h2>
        <p className={classes.degree}>{props.degree}</p>
        <p className={classes.degree}>{props.uni}</p>
        </div>
        
        
            
        </div>
    )
}
export default testimonialCard;