import React from "react"
import { Link } from "gatsby"

import saleInfoStyles from "./sale-info.module.scss"

const SaleInfo = (props) => {

    return (
        <section className={props.css}>
            <div className={saleInfoStyles.element}>
                <p className={`text-small ${saleInfoStyles.characteristic}`}>{props.support}</p>
                <p className={`text-small ${saleInfoStyles.characteristic}`}>{props.technique}</p>
            </div>
            <hr className={`divider ${saleInfoStyles.divider}`} style={{borderColor: props.modifier ? props.color : ""}}/>
            {props.description &&
                <>
                    <div className={saleInfoStyles.element}>
                        <p className={`text-normal ${saleInfoStyles.description}`}>{props.description}</p>
                    </div>
                    <hr className={`divider ${saleInfoStyles.divider}`} style={{borderColor: props.modifier ? props.color : ""}}/>
                </>
            }
            <div className={saleInfoStyles.element}>
                {props.cost && <p className={`text-small ${saleInfoStyles.characteristic}`}>{`Prix libre (coût matériel: ${props.cost}€)`}</p> }
                {props.sale && <p className={`text-small ${saleInfoStyles.characteristic}`}>{`${props.sale}€`}</p> }
                {props.cost &&
                    <div className={saleInfoStyles.cta}>
                        <div className={`button--outside button-link`} onClick={props.show} style={{backgroundColor: props.color}}>
                            <div className="button--inside">
                                Commander
                            </div>
                        </div>
                    </div>
                }
                {props.sale &&
                    <div className={saleInfoStyles.cta}>
                        <div className={`button--outside button-link`} onClick={props.show} style={{backgroundColor: props.color}}>
                            <div className="button--inside">
                                Commander
                            </div>
                        </div>
                    </div>
                }
            </div>
        </section>
    )
}

export default SaleInfo