import React from "react"
import Img from "gatsby-image"

import artpieceImagesStyles from "./artpiece-images.module.scss"

const ArtpieceImages = (props) => {

    return (
        <ul className={artpieceImagesStyles.ul}>
            {props.boutiquePic &&
                <li className={artpieceImagesStyles.li} style={{border: `solid 6px ${props.color? props.color :'white'}`}}>
                    <Img fluid={props.boutiquePic.childImageSharp.fluid}/>               
                </li>
            }
            {props.galeriePic &&
                <li className={artpieceImagesStyles.li} style={{border: `solid 6px ${props.color? props.color :'white'}`}}>
                    <Img fluid={props.galeriePic.childImageSharp.fluid} />               
                </li>
            }
            {props.sliderPics && props.sliderPics.map((sliderPic, i) =>
                    <li key={sliderPic + i} className={artpieceImagesStyles.li} style={{border: `solid 6px ${props.color? props.color :'white'}`}}>
                        <Img fluid={sliderPic.localFile.childImageSharp.fluid} />               
                    </li>
                ) 
            }
        </ul>
    )
}

export default ArtpieceImages