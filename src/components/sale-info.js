import React from "react"

import saleInfoStyles from "./sale-info.module.scss"

const SaleInfo = (props) => {

    return (
        <section className={props.css}>
            <div className={saleInfoStyles.element}>
                <p className="text-small">{props.support}</p>
                <p className="text-small">{props.technique}</p>
            </div>
            <hr className={`divider ${saleInfoStyles.divider}`} style={{borderColor: props.color}}/>
            {props.description &&
                <>
                    <div className={saleInfoStyles.element}>
                        <p className={`text-normal`}>{props.description}</p>
                    </div>
                    <hr className={`divider ${saleInfoStyles.divider}`} style={{borderColor: props.color}}/>
                </>
            }
            <div className={saleInfoStyles.element}>
                {props.cost && <p className="text-small">{`Prix libre (à vous de définir votre prix)`}</p> }
                {props.sale && <p className="text-small">{`${props.sale}`}</p>}
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