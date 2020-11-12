import React from 'react'
import { Link } from 'gatsby'

import exitButtonStyles from "./exit-button.module.scss"
import arrowsNavStyles from "./arrows-nav.module.scss"

const ExitButton = (props) => {
    return (
        <>
            {props.url? 
                <Link to={props.url} className={props.modifier ? exitButtonStyles.quit__modified : exitButtonStyles.quit}>
                    <div className={exitButtonStyles.button} style={{backgroundColor: props.backgroundColor, border: props.modifier? "none" : '2px solid white'}}>
                        <p className={exitButtonStyles.cross}>X</p>
                    </div>
                    {props.desc && <p className={arrowsNavStyles.linkdesc}>{props.desc}</p> }
                </Link> : 
                <div onClick={props.hide} className={props.modifier ? exitButtonStyles.quit__modified : exitButtonStyles.quit}>
                    <div className={exitButtonStyles.button} style={{backgroundColor: props.backgroundColor, border: props.modifier? "none" : '2px solid white'}}>
                        <p className={exitButtonStyles.cross}>X</p>
                    </div>
                    {props.desc && <p className={arrowsNavStyles.linkdesc}>{props.desc}</p> }
                </div>
            }           
        </>
    )
}

export default ExitButton