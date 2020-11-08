import React from "react"
import { Link } from "gatsby"

import arrowsNavStyles from "./arrows-nav.module.scss"

const ArrowsNav = (props) => {
    return (
        <div className={props.style}>
            { props.previous &&
                <Link to={`/jour-${props.previous}`} className={arrowsNavStyles.link}>
                    <div className={arrowsNavStyles.button} style={{backgroundColor: props.bgColor}}>
                        <p className={arrowsNavStyles.arrow}>{`<`}</p>
                    </div>
                    <p className={arrowsNavStyles.linkdesc}>{`Jour ${props.previous}`}</p>
                </Link>
            }
            { props.next &&
                <Link to={`/jour-${props.next}`} className={arrowsNavStyles.link}>
                    <div className={arrowsNavStyles.button} style={{backgroundColor: props.bgColor}}>
                        <p className={arrowsNavStyles.arrow}>{`>`}</p>
                    </div>
                    <p className={arrowsNavStyles.linkdesc}>{`Jour ${props.next}`}</p>
                </Link>
            }
        </div>
    )
}

export default ArrowsNav