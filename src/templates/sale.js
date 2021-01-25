import React, { useState } from "react"
import emailjs from "emailjs-com"
import { graphql } from "gatsby"
import ArtpieceSlider from "../components/artpiece-slider"
import SaleInfo from "../components/sale-info"
import ArtpieceImages from "../components/artpiece-images"
import ArrowsNav from "../components/ui/arrows-nav"
import ExitButton from '../components/exit-button'
import SalePayment from '../components/sale-payment'
import useModal from '../hooks/useModal'
import Head from "../components/head"
import Modal from "../components/modal"

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

    const currentPageIndex = pages.findIndex(x => x.title === sale.title);
    const previousPageSlug = currentPageIndex === 0 ? false : `/boutique/${string_to_slug(pages[currentPageIndex - 1].title)}`;
    const nextPageSlug = currentPageIndex === pages.length - 1 ? false : `/boutique/${string_to_slug(pages[currentPageIndex + 1].title)}`;
    
    const [ verifiedRecaptcha, setVerifiedRecaptcha ] = useState(false)
    const [ nom, setNom ] = useState('')
    const [ mail, setMail ] = useState('')
    const [ prix, setPrix ] = useState('')
    const [ adresse, setAdresse ] = useState('')
    const [ message, setMessage ] = useState('')

    const recaptchaRef = React.createRef()

    const [ sendMailSuccess, setSendMailSuccess ] = useState(false)
    const { isShowing, toggle } = useModal();
    //////// Repetitive toggle modal
    const [ showModal, setShowModal ] = useState(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    function orderArticle(e) {
        e.preventDefault();

        let templateParams = {
            article: sale.title,
            nom,
            mail,
            prix: sale.price_sale? sale.price_sale : prix,
            adresse,
            message,
            'g-recaptcha-response': recaptchaRef.current.getValue()
        }

        if(verifiedRecaptcha) {
            emailjs.send('un-an-de-couleurs', 'commande-mail', templateParams, 'user_vjzPkHn9KPDGGjFZL8Lht')
            .then((result) => {
                setSendMailSuccess(true)
                toggleModal();
                toggle();
                console.log(result.text)
            }, (error) => {
                toggleModal();
                console.log(error.text);
            })
                
                setNom('')
                setPrix('')
                setVerifiedRecaptcha(false)
                setAdresse('')
                setMessage('')
                setMail('')
        }
    }

    return (
        <>
            <Head title={sale.title} image={sale.boutique_cover.publicURL} description={`${sale.title}. ${sale.description && sale.description} ${sale.support} - ${sale.technique}. ${sale.price_sale || sale.cost_material}`} />
            <ExitButton url="/boutique" backgroundColor={sale.color} modifier={true} />
            <ArrowsNav previousSlug={previousPageSlug} previous={false} nextSlug={nextPageSlug} next={false} style={saleStyles.navigation} modifier={true} backgroundColor={sale.color} />
            <div className={saleStyles.body}>
                <ArtpieceSlider
                    css={saleStyles.slider} 
                    boutiquePic={sale.boutique_cover}
                    galeriePic={sale.artpiece.galerie_cover}
                    sliderPics={sale.slider}
                    color={sale.color}
                    vertical={true}
                    modifier={true}
                />
                <section className={saleStyles.container}> 
                    <div className={saleStyles.info}>
                        <div className={saleStyles.title}>
                            <h1 className="h3-title--important">{sale.title}</h1>
                        </div>
                        <div className={saleStyles.content}>
                            <ArtpieceImages 
                                boutiquePic={sale.boutique_cover}
                                galeriePic={sale.artpiece.galerie_cover}
                                sliderPics={sale.slider}
                                color={sale.color}
                            />
                            <SaleInfo 
                                support={sale.support}
                                technique={sale.technique}
                                description={sale.description ? sale.description : ''}
                                status={sale.status}
                                date={sale.date}
                                cost={sale.cost_material}
                                sale={sale.price_sale}
                                color={sale.color}
                                css={saleStyles.desc}
                                show={toggle}
                            />
                        </div>
                    </div>
                    <SalePayment 
                        css={saleStyles.payment} 
                        orderArticle={orderArticle}cost={sale.cost_material} 
                        sale={sale.price_sale} 
                        color={sale.color}
                        title={sale.title}
                        isShowing={isShowing}
                        hide={toggle}
                        setVerifiedRecaptcha={setVerifiedRecaptcha}
                        recaptchaRef={recaptchaRef}
                        nom={nom} setNom={setNom}
                        mail={mail} setMail={setMail}
                        adresse={adresse} setAdresse={setAdresse}
                        prix={prix} setPrix={setPrix}
                        message={message} setMessage={setMessage} />
                </section> 
                <Modal isShowing={showModal} object="order" hide={toggleModal} success={sendMailSuccess}/>      
            </div>
        </>
    )
}

export default Sale

export const pageQuery = graphql`
    query SaleQuery ($id: String!) {
        artworkSale: strapiArtworks (id: {eq: $id}) {
            id
            title
            support
            technique
            description
            color
            price_sale
            cost_material
            galerie_cover {
                publicURL
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            boutique_cover {
                publicURL
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            slider {
                localFile {
                    childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        sale: strapiSales (id: {eq: $id}) {
            id
            title
            support
            technique
            description
            color
            price_sale
            cost_material
            boutique_cover {
                publicURL
                childImageSharp {
                    fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            slider {
                localFile {
                    childImageSharp {
                        fluid(quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        sales: allStrapiSales {
            nodes {
                created_at
                title
            }
        }
        artworkSales: allStrapiArtworks(filter: {status: {eq: "acquerir"}}) {
            nodes {
                created_at
                title
            }
        }
    }
`