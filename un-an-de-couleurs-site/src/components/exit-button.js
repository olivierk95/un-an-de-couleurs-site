import React from 'react'
import { Link } from 'gatsby'

import exitButtonStyles from "./exit-button.module.scss"

const ExitButton = (props) => {
    return (
        <Link to={props.url} className={props.modifier ? exitButtonStyles.quit__modified : exitButtonStyles.quit}>
            <div className={exitButtonStyles.button} style={{backgroundColor: props.backgroundColor, border: props.modifier? "none" : '2px solid white'}}>
                <p className={exitButtonStyles.cross}>X</p>
            </div>
        </Link>
    )
}

export default ExitButton