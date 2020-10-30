import React from 'react'
import Img from "gatsby-image"
import heroStyles from "./hero.module.scss"

const Hero = (props) => {
    return (
        <div className={heroStyles.container}>
            <Img fluid={props.image} alt={props.alt} className={heroStyles.image}/>
            <div className={heroStyles.titleContainer}>
                <h2 className={heroStyles.title}>par Organik</h2>
            </div>
        </div>
    )
}

export default Hero