import React from "react"
import { Link } from "gatsby"

import arrowsNavStyles from "./arrows-nav.module.scss"

const ArrowsNav = (props) => {
    return (
        <div className={props.style}>
            { props.previousSlug &&
                <Link to={props.previousSlug} className={props.modifier? arrowsNavStyles.link__modified : arrowsNavStyles.link }>
                    <div className={arrowsNavStyles.button} style={{backgroundColor: props.backgroundColor, border: props.modifier? "none" : '3px solid white'}}>
                        <p className={arrowsNavStyles.arrow}>{`<`}</p>
                    </div>
                    {props.previous && <p className={arrowsNavStyles.linkdesc}>{props.previous}</p> }
                </Link>
            }
            { props.nextSlug &&
                <Link to={props.nextSlug} className={props.modifier? arrowsNavStyles.link__modified : arrowsNavStyles.link }>
                    <div className={arrowsNavStyles.button} style={{backgroundColor: props.backgroundColor, border: props.modifier? "none" : '3px solid white'}}>
                        <p className={arrowsNavStyles.arrow}>{`>`}</p>
                    </div>
                    {props.next && <p className={arrowsNavStyles.linkdesc}>{props.next}</p>}
                </Link>
            }
        </div>
    )
}

export default ArrowsNav