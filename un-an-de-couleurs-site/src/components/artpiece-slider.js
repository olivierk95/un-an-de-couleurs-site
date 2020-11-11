import React, { useState, useRef, useEffect } from "react"
import Img from 'gatsby-image'

import artpieceSliderStyles from "./artpiece-slider.module.scss"


const ArtpieceSlider = (props) => {
    const getSize = () => props.vertical? window.innerHeight : window.innerWidth;

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
        currentSlide: 0,
        translate: 0,
        transition: 0.45
    })

    const { currentSlide, translate, transition } = state

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
            translate: getSize() * currentSlide
        })
    }

    const nextSlide = () => {
        if (currentSlide === slides.length - 1) {
            return setState ({
                ...state,
                translate: 0,
                currentSlide: 0
            })
        }
        setState({
            ...state,
            currentSlide: currentSlide + 1,
            translate: (currentSlide + 1) * getSize()
        })
    }

    const prevSlide = () => {
        if (currentSlide === 0) {
            return setState ({
                ...state,
                translate: (slides.length - 1) * getSize(),
                currentSlide: slides.length - 1
            })
        }
        setState({
            ...state,
            currentSlide: currentSlide - 1,
            translate: (currentSlide - 1) * getSize()
        })
    }

    const jumpSlide = (index) => {
        if (currentSlide > index) {
            return setState ({
                ...state,
                currentSlide: index,
                translate: index * getSize()
            })
        }
        else if (currentSlide < index) {
            return setState ({
                ...state,
                currentSlide: index,
                translate: index * getSize()
            })
        }
    }


    return (
        <div className={`${props.css} ${artpieceSliderStyles.container}`}>
            <div className={artpieceSliderStyles.content} 
                style={{transform: props.vertical ? `translateY(-${translate}px)` : `translateX(-${translate}px)`,
                    transition: `transform ease-out ${transition}s`,
                    width: props.vertical? '100%' : `${(getSize() * slides.length)}px`,
                    height: props.vertical? `${(getSize() * slides.length)}px` : '100%',
                    display: props.vertical? 'block': 'flex'}}>
                {slides.map((slide, i) => (
                    <div key={slide + i} className={artpieceSliderStyles.slide} style={{height: props.vertical? '100vh' : '100%'}} onClick={nextSlide}>
                        <Img fluid={slide} className={artpieceSliderStyles.img} imgStyle={{objectFit: "contain"}}
                            style={{
                                height: props.vertical? '90vh' : '75vh',
                                width: props.vertical? '100%' : '75vw',
                                filter: props.modifier? `drop-shadow(0 -10px 0 ${props.color}) drop-shadow(0 10px 0 ${props.color}) drop-shadow(10px 0 0 ${props.color}) drop-shadow(-10px 0 0  ${props.color})` : 'drop-shadow(0 -10px 0 white) drop-shadow(0 10px 0 white) drop-shadow(10px 0 0 white) drop-shadow(-10px 0 0  white)'}} />           
                    </div>
                ))}
            </div>
            <div className={artpieceSliderStyles.nav} 
                style={{
                    flexDirection: props.vertical? 'column' : 'row', 
                    width: props.vertical? 'auto': '100%' ,
                    height: props.vertical? '100%' : 'auto'}}>
                <div onClick={prevSlide} className={artpieceSliderStyles.arrow} style={{transform: props.vertical? 'rotate(90deg)' : 'none', color: props.modifier? props.color : 'white'}}>
                    {`<`}
                </div>
                <div className={artpieceSliderStyles.dotsnav} style={{flexDirection: props.vertical? 'column' : 'row'}}>
                    {slides.map((slide, i) => (
                        <span key={slide + i} onClick={() => jumpSlide(i)} style={{backgroundColor: props.modifier? (currentSlide === i? 'black' : props.color) : (currentSlide === i? 'black' : 'white')}} className={artpieceSliderStyles.dot}/>
                    ))}
                </div>
                <div onClick={nextSlide} className={artpieceSliderStyles.arrow} style={{transform: props.vertical? 'rotate(90deg)' : 'none', color: props.modifier? props.color : 'white'}}>
                    {`>`}
                </div>
            </div>
        </div>
    )
}

export default ArtpieceSlider