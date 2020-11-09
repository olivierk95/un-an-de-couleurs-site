import React from "react"
import { Link } from "gatsby"

import artpieceInfoStyles from "./artpiece-info.module.scss"

const ArtpieceInfo = (props) => {
    let status = props.status;
    if (status === "acquerir") {
        status = "Disponible en boutique";
    }
    else if (status === "adjuge") {
        status = "Adjugé";
    }
    else if (status === "emprunte") {
        status = "Emprunté";
    }
    else if (status === "commande") {
        status = "Commande";
    }
    else if (status === "none") {
        status = false;
    } else {
        status = false;
    }

    return (
        <div className={artpieceInfoStyles.container}>
            <div className={`${artpieceInfoStyles.element} ${artpieceInfoStyles.characteristicscontainer}`}>
                <p className="text-small">{props.support}</p>
                <p className="text-small">{props.technique}</p>
            </div>
            <hr className={`info__divider ${artpieceInfoStyles.divider}`}/>
            {props.description &&
                <>
                    <div className={`${artpieceInfoStyles.element} ${artpieceInfoStyles.descriptioncontainer}`}>
                        <p className={`text-normal ${artpieceInfoStyles.description}`}>{props.description}</p>
                    </div>
                    <hr className={`info__divider ${artpieceInfoStyles.divider}`}/>
                </>
            }
            <div className={`${artpieceInfoStyles.element} ${artpieceInfoStyles.actionscontainer}`}>
                {status &&
                    <div className={`h4-title ${artpieceInfoStyles.status}`}>-{status}-</div>
                }
                {props.status === "acquerir" &&
                    <div className={artpieceInfoStyles.cta}>
                        <Link to="/" className={`button--outside button-link bg-color-cycle`}>
                            <div className="button--inside">
                                Acquérir
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}

export default ArtpieceInfo