import React from "react"
import { Link, graphql } from "gatsby"
import artpieceStyles from "./artpiece.module.scss"
import ArrowsNav from "../components/arrows-nav"
import ArtpieceSlider from "../components/artpiece-slider"
import ArtpieceImages from "../components/artpiece-images"
import ArtpieceInfo from "../components/artpiece-info"

const Artpiece = ( {data} ) => {

    const currentPageIndex = data.pages.nodes.findIndex(x => x.day === data.artpiece.day);
    const previousPageDay = currentPageIndex === 0 ? false : data.pages.nodes[currentPageIndex - 1].day;
    const nextPageDay = currentPageIndex === data.pages.nodes.length - 1 ? false : data.pages.nodes[currentPageIndex + 1].day;
    
    return (
        <div className={artpieceStyles.body} style={{backgroundColor: data.artpiece.information.color_primary}}>
            <Link to="/" className={artpieceStyles.quit}>
                <div className={artpieceStyles.button} style={{backgroundColor: data.artpiece.information.color_primary}}>
                    <p className={artpieceStyles.cross}>X</p>
                </div>
            </Link>
            <ArrowsNav previous={previousPageDay} next={nextPageDay} style={artpieceStyles.navigation}  bgColor={data.artpiece.information.color_primary} />
            <section> 
                <div className={artpieceStyles.title}>
                    <h1 className="h3-title">{data.artpiece.information.title}</h1>
                    {data.artpiece.day &&
                        <>
                            <hr className={`info__divider ${artpieceStyles.divider}`}/>
                            <h2 className="h4-title">{`Jour ${data.artpiece.day}`}</h2>
                        </>
                    }
                </div>
                <div className={artpieceStyles.content}>
                    <ArtpieceSlider
                        galeriePic={data.artpiece.galerie_cover}
                        boutiquePic={data.artpiece.boutique_cover}
                        sliderPics={data.artpiece.slider}
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
                    />
                </div>
            </section>      
        </div>
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