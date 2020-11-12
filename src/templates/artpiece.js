import React from "react"
import { graphql } from "gatsby"
import artpieceStyles from "./artpiece.module.scss"
import ArrowsNav from "../components/arrows-nav"
import ArtpieceSlider from "../components/artpiece-slider"
import ArtpieceImages from "../components/artpiece-images"
import ArtpieceInfo from "../components/artpiece-info"
import ExitButton from "../components/exit-button"

import "../styles/main.scss"

const Artpiece = ( {data} ) => {
   
    // !!!!!!! à améliorer --> Hooks
    const currentPageIndex = data.pages.nodes.findIndex(x => x.day === data.artpiece.day);
    const previousPage = currentPageIndex === 0 ? false : data.pages.nodes[currentPageIndex - 1].day;
    const nextPage = currentPageIndex === data.pages.nodes.length - 1 ? false : data.pages.nodes[currentPageIndex + 1].day;
    
    return (
        <>
            <ExitButton url="/" backgroundColor={data.artpiece.information.color_primary} />
            <ArrowsNav previousSlug={previousPage && `/jour-${previousPage}`} previous={`Jour ${previousPage}`} nextSlug={nextPage && `/jour-${nextPage}`} next={`Jour ${nextPage}`} style={artpieceStyles.navigation} backgroundColor={data.artpiece.information.color_primary} />
            <section className={artpieceStyles.body} style={{backgroundColor: data.artpiece.information.color_primary}}>
                <div className={artpieceStyles.title}>
                    <h1 className="h3-title">{data.artpiece.information.title}</h1>
                    <hr className={`divider ${artpieceStyles.divider}`}/>
                    <h2 className="h4-title">{`Jour ${data.artpiece.day}`}</h2>
                </div>
                <div className={artpieceStyles.content}>
                    <ArtpieceSlider
                        css={artpieceStyles.slider}
                        galeriePic={data.artpiece.galerie_cover}
                        boutiquePic={data.artpiece.boutique_cover}
                        sliderPics={data.artpiece.slider}
                        vertical={false}
                    />
                    <ArtpieceImages 
                        galeriePic={data.artpiece.galerie_cover}
                        boutiquePic={data.artpiece.boutique_cover}
                        sliderPics={data.artpiece.slider}
                    />
                    <ArtpieceInfo 
                        support={data.artpiece.information.support}
                        technique={data.artpiece.information.technique}
                        description={data.artpiece.information.description}
                        status={data.artpiece.status}
                        date={data.artpiece.information.date}
                        title={data.artpiece.information.title}
                        css={artpieceStyles.desc}
                    />
                </div>
            </section>      
        </>
    )
}

export default Artpiece

export const pageQuery = graphql`
    query ArtpieceQuery ($id: String!) {
        artpiece: strapiArtworks(id: {eq: $id}) {
            day
            status
            information {
                title
                technique
                support
                description
                color_primary
                date
            }
            galerie_cover {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            slider {
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            boutique_cover {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        pages: allStrapiArtworks(sort: {fields: day, order: DESC}) {
            nodes {
                day
            }
        }
    }
`