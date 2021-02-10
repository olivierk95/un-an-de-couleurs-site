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
          <>
            {cover.date ?
              parseInt(cover.date.substr(8,2)) === 22 &&
                <div className={`${galleryStyles.j0container} grid-column-1 grid-row-1`} >
                  <div className={`bg-color-cycle ${galleryStyles.j0}`}>
                    <h2 className={`${galleryStyles.title} h2-title`}>Mois {parseInt(cover.date.substr(5,2)) > 11 ? 1 : parseInt(cover.date.substr(5,2)) + 1 } ✔️</h2> 
                    <hr className="divider"/>
                    <p className={`${galleryStyles.characteristics} text-small--white`}>
                        {`23.${cover.date.substr(5,2)}.${cover.date.substr(0,4)}`}
                        <br/>
                        Une œuvre / {parseInt(cover.date.substr(5,2)) > 2 ? "5 jours" : "jour" }
                    </p> 
                  </div>
                </div>
              : ""
            }
            <Link to={cover.day? `/jour-${cover.day}` : `/boutique/${string_to_slug(cover.title)}`} className={`${galleryStyles.container} grid-column-${cover.cover_width ? cover.cover_width : cover.boutique_width} grid-row-${cover.cover_height ? cover.cover_height : cover.boutique_height}`} key={cover.id}>
                  <Img className={galleryStyles.cover} fluid={cover.galerie_cover && cover.cover_width ? { ...cover.galerie_cover.childImageSharp.fluid, aspectRatio: cover.cover_width/cover.cover_height} : { ...cover.boutique_cover.childImageSharp.fluid, aspectRatio: cover.boutique_width/cover.boutique_height}} objectPosition="50% 50%" alt={cover.title}/>
                  <div className={galleryStyles.caption} style={{backgroundColor: cover.color}}>
                      {cover.support ? 
                          <p className={`${galleryStyles.characteristics} text-small--white`}>{`J${cover.day}`}</p> :
                          <p className={`${galleryStyles.characteristics} text-small--white`}>
                            {cover.cost_material && "Prix libre"}
                            {cover.price_sale && `${cover.price_sale}`}
                          </p>
                      }
                  </div>
                  <div className={galleryStyles.info} style={{backgroundColor: cover.color}}>
                      {cover.day ? 
                        <h2 className={`${galleryStyles.title} h2-title`}>{`J${cover.day}`}</h2> :
                        <h2 className={`${galleryStyles.title} h3-title`}>{cover.title}</h2>
                      }
                      <hr className="divider"/>
                      {cover.support ? 
                        <p className={`${galleryStyles.characteristics} text-small--white`}>{cover.title}</p> :
                        <p className={`${galleryStyles.characteristics} text-small--white`}>
                          {cover.cost_material && "Prix libre"}
                          {cover.price_sale && `${cover.price_sale}`}
                        </p>
                      }
                  </div>
            </Link>
          </>
        )}
        {props.j0 &&
          <div className={`${galleryStyles.j0container} grid-column-1 grid-row-1`} >
            <div className={`bg-color-cycle ${galleryStyles.j0}`}>
              <h2 className={`${galleryStyles.title} h2-title`}>Jour 0</h2> 
              <hr className="divider"/>
              <p className={`${galleryStyles.characteristics} text-small--white`}>
                  23.11.2020
                  <br/>
                  Une œuvre / jour
                </p> 
            </div>
          </div>
        }
    </>
  )
}

export default Gallery