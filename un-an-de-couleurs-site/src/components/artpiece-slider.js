import React, { useState } from "react"
import Img from 'gatsby-image'

import artpieceSliderStyles from "./artpiece-slider.module.scss"

const ArtpieceSlider = (props) => {
    const getWidth = () => window.innerWidth

    const [ state, setState ] = useState({
        translate: 0,
        transition: 0.45
    })

    const { translate, transition } = state

    const slides = []; 
    if (props.galeriePic) {
        slides.push(props.galeriePic.childImageSharp.fluid);
    } if (props.boutiquePic) {
        slides.push(props.boutiquePic.childImageSharp.fluid);
    } if (props.sliderPics) {
        props.sliderPics.forEach (slidePic =>
            slides.push(slidePic.localFile.childImageSharp.fluid)
        )
    }


    return (
        <div className={artpieceSliderStyles.container}>
            <div className={artpieceSliderStyles.content} 
                style={{transformX: 'translateX(-' + translate + 'px',
                    transition: 'transform ease-out ' + transition + 's',
                    width: getWidth() + 'px'}}>
                {slides.map((slide, i) => (
                    <div key={slide + i} className={artpieceSliderStyles.slide}>
                        <Img fluid={slide} />               
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArtpieceSlider