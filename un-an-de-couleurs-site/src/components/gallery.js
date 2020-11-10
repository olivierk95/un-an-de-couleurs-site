import React from "react"
import Layout from "../templates/layout"
import { Link } from "gatsby"
import Img from "gatsby-image"
import galleryStyles from "./gallery.module.scss"

const Gallery = (props) => {

  return (
    <>
        {props.data.map((cover) =>
            <Link to={`/jour-` + cover.day} className={`${galleryStyles.container} grid-column-` + cover.cover_width + ` grid-row-`+ cover.cover_height} key={cover.information.id}>
                <Img className={galleryStyles.cover} fluid={{ ...cover.galerie_cover.childImageSharp.fluid, aspectRatio: cover.cover_width/cover.cover_height}} alt={cover.information.title}/>
                <div className={galleryStyles.info} style={{backgroundColor: cover.information.color_primary}}>
                    <h2 className={`${galleryStyles.title} h2-title`}>{`Jour ${cover.day}`}</h2>
                    <hr className={galleryStyles.divider}/>
                    <p className={`${galleryStyles.characteristics} text-small`}>{cover.information.support} - {cover.information.technique}</p>
                </div>
            </Link>
        )}
    </>
  )
}

export default Gallery