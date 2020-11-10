import React, { useState, useRef, useEffect } from "react"
import Img from 'gatsby-image'

import artpieceSliderStyles from "./artpiece-slider.module.scss"

const getWidth = () => window.innerWidth

const ArtpieceSlider = (props) => {
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

    const [ state, setState ] = useState({
        currentIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const { currentIndex, translate, transition } = state

    const resizeRef = useRef()

    useEffect(() => {
        resizeRef.current = handleResize
    })

    useEffect(() => {
        const resize = () => {
            resizeRef.current()
        }
        const onResize = window.addEventListener('resize', resize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const handleResize = () => {
        setState({
            ...state,
            translate: getWidth() * currentIndex
        })
    }

    const nextSlide = () => {
        if (currentIndex === slides.length - 1) {
            return setState ({
                ...state,
                translate: 0,
                currentIndex: 0
            })
        }
        setState({
            ...state,
            currentIndex: currentIndex + 1,
            translate: (currentIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (currentIndex === 0) {
            return setState ({
                ...state,
                translate: (slides.length - 1) * getWidth(),
                currentIndex: slides.length - 1
            })
        }
        setState({
            ...state,
            currentIndex: currentIndex - 1,
            translate: (currentIndex - 1) * getWidth()
        })
    }

    const jumpSlide = (index) => {
        if (currentIndex > index) {
            return setState ({
                ...state,
                currentIndex: index,
                translate: index * getWidth()
            })
        }
        else if (currentIndex < index) {
            return setState ({
                ...state,
                currentIndex: index,
                translate: index * getWidth()
            })
        }
    }


    return (
        <div className={artpieceSliderStyles.container}>
            <div className={artpieceSliderStyles.content} 
                style={{transform: 'translateX(-' + translate + 'px)',
                    transition: 'transform ease-out ' + transition + 's',
                    width: (getWidth() * slides.length) + 'px'}}>
                {slides.map((slide, i) => (
                    <div key={slide + i} className={artpieceSliderStyles.slide} onClick={nextSlide}>
                        <Img fluid={slide} className={artpieceSliderStyles.img} imgStyle={{objectFit: "contain"}} />           
                    </div>
                ))}
            </div>
            <div className={artpieceSliderStyles.nav}>
                <div onClick={prevSlide} className={artpieceSliderStyles.arrow}>
                    {`<`}
                </div>
                <div className={artpieceSliderStyles.dotsnav}>
                    {slides.map((slide, i) => (
                        <span key={slide + i} onClick={() => jumpSlide(i)} style={{backgroundColor: currentIndex === i? 'black' : 'white'}} className={artpieceSliderStyles.dot}/>
                    ))}
                </div>
                <div onClick={nextSlide} className={artpieceSliderStyles.arrow}>
                    {`>`}
                </div>
            </div>
        </div>
    )
}

export default ArtpieceSlider