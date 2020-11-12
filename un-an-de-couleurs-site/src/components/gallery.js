import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import galleryStyles from "./gallery.module.scss"

const Gallery = (props) => {

  // !!!!!!!!!!!!!!!!!!!!!! à mettre autre part
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

  return (
    <>
        {props.data.map((cover) =>
            <Link to={cover.day? `/jour-${cover.day}` : `/boutique/${string_to_slug(cover.information.title)}`} className={`${galleryStyles.container} grid-column-${cover.cover_width ? cover.cover_width : 1} grid-row-${cover.cover_height ? cover.cover_height : 1}`} key={cover.id}>
                <Img className={galleryStyles.cover} fluid={cover.galerie_cover && cover.cover_width ? { ...cover.galerie_cover.childImageSharp.fluid, aspectRatio: cover.cover_width/cover.cover_height} : { ...cover.boutique_cover.childImageSharp.fluid, aspectRatio: 1/1}} alt={cover.information.title}/>
                <div className={galleryStyles.info} style={{backgroundColor: cover.information.color_primary}}>
                    {cover.day ? 
                      <h2 className={`${galleryStyles.title} h2-title`}>{`Jour ${cover.day}`}</h2> :
                      <h2 className={`${galleryStyles.title} h3-title`}>{cover.information.title}</h2>
                    }
                    <hr className="divider"/>
                    {cover.information.support ? 
                      <p className={`${galleryStyles.characteristics} text-small`}>{cover.information.support} - {cover.information.technique}</p> :
                      <p className={`${galleryStyles.characteristics} text-small`}>
                        {cover.pricing.cost_material && <><span>Prix libre</span><br/><span>{`coût du matériel: ${cover.pricing.cost_material}€`}</span></>}
                        {cover.pricing.sale_price && `${cover.pricing.sale_price}€`}
                      </p>
                    }
                </div>
            </Link>
        )}
    </>
  )
}

export default Gallery