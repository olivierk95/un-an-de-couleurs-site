import React from "react"
import { graphql } from "gatsby"
import ArtpieceSlider from "../components/artpiece-slider"
import ArtpieceInfo from "../components/artpiece-info"
import ArtpieceImages from "../components/artpiece-images"
import ArrowsNav from "../components/arrows-nav"
import ExitButton from '../components/exit-button'

import "../styles/main.scss"
import saleStyles from "./sale.module.scss"

// !!!! à mettre autre part 
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

const Sale = ( {data} ) => {

    const sale = data.sale ? data.sale : data.artworkSale  

    // !!!!!!! à améliorer --> Hooks
    let pages = [];
    pages = data.sales.nodes.concat(data.artworkSales.nodes)

    pages.sort(function(a,b) {
        let c = new Date(a.created_at);
        let d = new Date(b.created_at);
        return d-c;
    })

    console.log(pages)
    const currentPageIndex = pages.findIndex(x => x.information.title === sale.information.title);
    const previousPageSlug = currentPageIndex === 0 ? false : `/boutique/${string_to_slug(pages[currentPageIndex - 1].information.title)}`;
    const nextPageSlug = currentPageIndex === pages.length - 1 ? false : `/boutique/${string_to_slug(pages[currentPageIndex + 1].information.title)}`;

    return (
        <>
            <ExitButton url="/boutique" backgroundColor={sale.information.color_primary} modifier={true} />
            <ArrowsNav previousSlug={previousPageSlug} previous={false} nextSlug={nextPageSlug} next={false} style={saleStyles.navigation} modifier={true} backgroundColor={sale.information.color_primary} />
            <div className={saleStyles.body}>
                <ArtpieceSlider
                    css={saleStyles.slider} 
                    boutiquePic={sale.boutique_cover}
                    galeriePic={sale.galerie_cover}
                    sliderPics={sale.slider}
                    color={sale.information.color_primary}
                    vertical={true}
                    modifier={true}
                />
                <section className={saleStyles.container}> 
                    <div className={saleStyles.info}>
                        <div className={saleStyles.title}>
                            <h1 className="h3-title">{sale.information.title}</h1>
                        </div>
                        <div className={saleStyles.content}>
                            <ArtpieceImages 
                                galeriePic={sale.galerie_cover}
                                boutiquePic={sale.boutique_cover}
                                sliderPics={sale.slider}
                                color={sale.information.color_primary}
                            />
                            <ArtpieceInfo 
                                support={sale.information.support}
                                technique={sale.information.technique}
                                description={sale.information.description}
                                status={sale.status}
                                date={sale.information.date}
                                cost={sale.pricing.cost_material}
                                sale={sale.pricing.sale_price}
                                leasing={sale.pricing.leasing_price}
                                color={sale.information.color_primary}
                                css={saleStyles.desc}
                                modifier={true}
                            />
                        </div>
                    </div>
                </section>       
            </div>
        </>
    )
}

export default Sale

export const pageQuery = graphql`
    query SaleQuery ($id: String!) {
        artworkSale: strapiArtworks (id: {eq: $id}) {
            id
            information {
                color_primary
                description
                support
                technique
                title
            }
            pricing {
                cost_material
                leasing_price
                sale_price
            }
            boutique_cover {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
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
        }
        sale: strapiSales (id: {eq: $id}) {
            id
            information {
                color_primary
                description
                support
                technique
                title
            }
            pricing {
                cost_material
                leasing_price
                sale_price
            }
            boutique_cover {
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
        }
        sales: allStrapiSales {
            nodes {
                created_at
                information {
                    title
                }
            }
        }
        artworkSales: allStrapiArtworks(filter: {status: {eq: "acquerir"}}) {
            nodes {
                created_at
                information {
                    title
                }
            }
        }
    }
`