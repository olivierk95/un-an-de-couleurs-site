import React from 'react'
import { Link } from 'gatsby'

import exitButtonStyles from "./exit-button.module.scss"
import arrowsNavStyles from "./ui/arrows-nav.module.scss"

const ExitButton = ({desc, modifier, hide, url, backgroundColor, absolute}) => {
    return (
        <>
            {url? 
                <Link to={url} className={modifier ? exitButtonStyles.quit__modified : exitButtonStyles.quit}>
                    <div className={exitButtonStyles.button} style={{backgroundColor: backgroundColor, border: modifier? "none" : '3px solid white'}}>
                        <p className={exitButtonStyles.cross}>X</p>
                    </div>
                    {desc && <p className={arrowsNavStyles.linkdesc}>{desc}</p> }
                </Link> : 
                <div onClick={hide} className={modifier ? exitButtonStyles.quit__modified : exitButtonStyles.quit} style={{position: absolute? 'absolute' : 'fixed'}}>
                    <div className={exitButtonStyles.button} style={{backgroundColor: backgroundColor, border: modifier? "none" : '3px solid white'}}>
                        <p className={exitButtonStyles.cross}>X</p>
                    </div>
                    {desc && <p className={arrowsNavStyles.linkdesc}>{desc}</p> }
                </div>
            }           
        </>
    )
}

export default ExitButton