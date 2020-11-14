import React from "react"
import { Link } from "gatsby"

import artpieceInfoStyles from "./artpiece-info.module.scss"

// !!!! à mettre autre part 
function string_to_slug(str) {
    str = str.replace(/^\s+|\s+$/g, ''); // trim
    str = str.toLowerCase();
    
    // remove accents, swap ñ for n, etc
    var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    var to   = "aaaaeeeeiiiioooouuuunc------";
    for (var i=0, l=from.length ; i<l ; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    
    str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
        .replace(/\s+/g, '-') // collapse whitespace and replace by -
        .replace(/-+/g, '-'); // collapse dashes
    
    return str;
}

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
        <div className={props.css}>
            <div className={artpieceInfoStyles.characteristicscontainer}>
                <div className={artpieceInfoStyles.element}>
                    {props.date && <p className={`text-normal--white ${artpieceInfoStyles.date}`}>{props.date}</p>}
                    <div>
                        <p className="text-small--white">{props.support}</p>
                        <p className="text-small--white">{props.technique}</p>
                    </div>
                </div>
                <hr className={`divider ${artpieceInfoStyles.divider}`}/>
            </div>
            {props.description &&
                <div className={artpieceInfoStyles.descriptioncontainer}>
                    <div className={artpieceInfoStyles.element}>
                        <p className="text-normal--white">{props.description}</p>
                    </div>
                    <hr className={`divider ${artpieceInfoStyles.divider}`}/>
                </div>
            }
            <div className={artpieceInfoStyles.actionscontainer}>
                <div className={artpieceInfoStyles.element}>
                    {status &&
                        <div className={`h4-title--white ${artpieceInfoStyles.status}`}>-{status}-</div>
                    }
                    {props.status === "acquerir" &&
                        <div className={artpieceInfoStyles.cta}>
                            <Link to={`/boutique/${string_to_slug(props.title)}`} className={`button--outside button-link bg-color-cycle`}>
                                <div className="button--inside">
                                    Acquérir
                                </div>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default ArtpieceInfo