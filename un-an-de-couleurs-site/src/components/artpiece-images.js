import React from "react"
import Img from "gatsby-image"

import artpieceImagesStyles from "./artpiece-images.module.scss"

const ArtpieceImages = (props) => {
    console.log(props.sliderPics)

    return (
        <ul className={artpieceImagesStyles.ul}>
            {props.galeriePic &&
                <li className={artpieceImagesStyles.li}>
                    <Img fluid={props.galeriePic.childImageSharp.fluid} />               
                </li>
            }
            {props.boutiquePic &&
                <li className={artpieceImagesStyles.li}>
                    <Img fluid={props.boutiquePic.childImageSharp.fluid} />               
                </li>
            }
            {props.sliderPics && props.sliderPics.map((sliderPic) =>
                    <li className={artpieceImagesStyles.li}>
                        <Img fluid={sliderPic.localFile.childImageSharp.fluid} />               
                    </li>
                ) 
            }
        </ul>
    )
}

export default ArtpieceImages