import React from 'react'
import Layout from "../templates/layout"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import ContactForms from "../components/contact-forms"
import Head from "../components/head"

import InstagramIcon from "../assets/instagram-icon.svg"
import proposStyles from "./propos.module.scss"

const ProposPage = () => {
    const data = useStaticQuery(graphql`
        query {
            profil: file(relativePath: { eq: "photo-profil.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 800, maxHeight:800) {
                        ...GatsbyImageSharpFluid
                    }
                }
            },
        }
    `)
    return (
        <Layout>
            <Head title="A propos" description="Olivier Keutgens alias Organik est un jeune artiste liégeois. Passionné de graphisme et d'art urbain, il cherche à transmettre sa passion, sa simplicité et sa bienveillance au travers de son projet 'Un an de Couleurs'."/>
            <div className={proposStyles.container}>
                <section className={proposStyles.projet}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">Projet</h2>
                        <div>
                            <h3 className="font-color-cycle h2-title">Un an de quoi? C'est quoi cette histoire?</h3> 
                            <p className="text-normal">Un an de COULEURS! En très résumé: un an ou je me motive à peindre quotidienement (pour la forme, à défaut de faire du sport).
                            <br/><br/>
                            <b>Pour vous</b>, c’est l’occasion de découvrir mon univers, être témoin de mon évolution artistique au jour le jour et revoir un peu de couleurs après une année assez merdique.
                            <br/><br/>
                            <b>Pour moi</b>, c’est une manière de progresser, de peindre sur de nouveaux types de support, d’expérimenter de nouvelles techniques et de faire voyager mon imagination.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="font-color-cycle h2-title">Organik? C’est qui ce pseudo-artiste au nom composté?</h3> 
                            <p className="text-normal">O-livier K-eutgens, alias O-rgani-K. Voilà d'où vient mon nom d'artiste que j'ai choisi à 13ans.</p>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Mon parcours atypique...</h4>
                                <p className="text-normal">Passionné de créations et de dessins depuis mon plus jeune âge, l’art urbain est très vite devenu une sorte de fantasme dans ma vie. Dès 13-14 ans, je choisis le blaze “OrganiK”, collectionne les livres de street art/graffiti et je réalise même mon TFE secondaire sur le sujet. Pourtant, je ne me suis jamais aventuré à passer le cap de la feuille.
                                    Suite à une éducation assez “classique” dans un cocon familial très sécuritaire et me sentant un peu isolé dans ma passion (aucune connaissance aux aspirations similaires), je me lance dans des études en sciences économiques à HEC-ULg. J’y réalise un bachelier en sciences économiques et de gestion et un master en marketing à HEC-ULg. Pourtant, après avoir reçu mon diplôme je me ne me sens pas à ma place et pas du tout enclin à rechercher un métier dans ce domaine. Je commence une formation d’un an en développement web avec l’organisme Becode. Bien que très enrichissante (surtout dans le domaine de l’auto-apprentissage), je sens que passer mes journées sur un écran n’est pas fait pour moi, je décide alors de réaliser un rêve; partir plus d’un an à l’aventure en amérique centrale pour y développer des projets de manière bénévole. Une expérience qui m’a beaucoup apporté sur le plan professionnel mais surtout sur le plan humain et que j’aurai adoré poursuivre. Mais le covid est passé par là et a tout chamboulé: retour en Belgique prématuré sans projet concret…
                                    <br/><br/>
                                    Lors de mon aventure à l’étranger, j’en profite pour me rapprocher un peu plus de cette passion laissée au placard durant mes années d’études. Quelques fresques murales, des réalisations de t-shirts, un projet artistique super chouette avec des enfants dans une école du Guatemala, sont autant de réalisations qui restent de très bons souvenirs. C’est d’ailleurs pourquoi j’entreprend le projet "Un an de Couleurs" à mon retour en Belgique. Un peu comme un petit challenge personnel, je réalise quotidiennement des œuvres avec beaucoup de bonheur avec pour objectif d’apprendre et d’affiner mon style et ma technique durant un an (avec l’espoir caché d’en vivre partiellement ou complètement aussi).</p>
                            </div>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Ma démarche artistique</h4>
                                <p className="text-normal">Je représente la vie, les humains, la nature, les animaux, toute sorte d’être vivant en plus ou moins gros plan. Je suis un amoureux du vivant dans son ensemble. J’adore observer la nature et m’y balader. J’y retrouve toute la fascination, la curiosité et l’innocence d’un enfant.<br/>
                                    J’abuse des couleurs dans le but d’apporter un peu de chaleur et de multiculturalité à mes œuvres. J’espère apporter un sentiment de plénitude, d’amour et d’humanité aux gens qui y passent leur regard.<br/>
                                    J’utilise des traits/lignes/formes qui s’entrecroisent pour donner vie aux illustrations. Les corps s'entremêlent dans un désordre organisé pour laisser place à la poésie de l’imaginaire et de la bienveillance.<br/>
                                    Mon esthétique évolue et se “complexifie” petit à petit, mais c’est vers cela que je tends.<br/>
                                    <br/><br/>
                                    Je pense que mon style est un reflet de ma personnalité; quelqu’un de simple et d’idéaliste qui rêve de sauver le monde avec des coups de crayons.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={proposStyles.sos}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">SOS</h2>
                        <p className="h2-title font-color-cycle">Tu peux aussi prendre part à cette aventure!</p>
                        <div className="content-container">
                            <h3 className="h3-title">M'aider</h3>
                            <p className="text-normal">J’ai besoin de supports (objets, tableaux, panneaux, etc.), peintures, de cadres et pinceaux en tout genre pour réaliser des oeuvres. Toute donation est accueillie avec ma plus sincère reconnaissance, d’autant plus si cela permet de recycler un objet inutilisé.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h3-title">M’avoir en peinture</h3>
                            <p className="text-normal">Ou plutôt si tu souhaites une oeuvre particulière pour toi, ton commerce ou une connaissance? Collaborons ensemble pour la réaliser.<br/>
                            Quelques idées: caricature pour un anniversaire, fresque murale, personnalisation d’un objet ancien en objet d’art, réalisation d’une oeuvre personnel...</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h3-title">M’inspirer</h3>
                            <p className="text-normal">Partage-moi tes idées, tes remarques ou tes défis afin que je ne tombe jamais à court d’idée! Ne sois pas timide, les meilleures idées sont trop souvent celles qu’on ne partage pas.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h3-title">Me motiver</h3>
                            <p className="text-normal">Un petit message de soutien, une bonne intention ou même une lettre d’amour ça fait toujours plaisir à recevoir et c’est ce qui donne vraiment des ailes (contrairement à la célèbre boisson). Ouvrir nos coeurs c’est la clé pour un monde meilleur!</p>
                        </div>
                    </div>
                </section>
                <section className={proposStyles.contact}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">Contact</h2>
                        <p className={`text-normal ${proposStyles.contactDetails}`}>Mail: organik.artist@gmail.com</p>
                        <p className={`text-normal ${proposStyles.contactDetails}`} style={{paddingTop: "10px"}}>Origine: Olne (Liège), Belgique</p>
                        <ContactForms />
                        <div className="content-container">
                            <h4 className="h3-title">S'abonner</h4> 
                            <a href="https://www.instagram.com/organik.artist/" target="_blank" rel="noreferrer"><InstagramIcon className={proposStyles.icon + ` fill-color-cycle icon-link`} /></a>
                        </div>
                    </div>
                </section>
                <section className={proposStyles.merci}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">Merci, ce projet c'est grâce à vous!</h2>
                        <div className="paragraph-container">
                            <Img fluid={data.profil.childImageSharp.fluid} alt="Photo de l'artiste" className={proposStyles.image}/>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default ProposPage