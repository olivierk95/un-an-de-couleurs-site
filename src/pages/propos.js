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
                            <b>Pour vous</b>, c’est l’occasion de découvrir mon univers, être témoin de mon évolution artistique au jour le jour et revoir un peu de couleurs après une année merdique.
                            <br/><br/>
                            <b>Pour moi</b>, c’est un l’occasion de me mettre au défi, de peindre sur de nouveaux types de support, d’expérimenter de nouvelles techniques et de faire voyager mon imagination.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="font-color-cycle h2-title">Organik? C’est qui ce pseudo-artiste au nom composté?</h3> 
                            <p className="text-normal">O-livier K-eutgens, alias O-rgani-K. Voilà d'où vient mon nom d'artiste que j'ai choisi à 13ans.</p>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Mon parcours atypique...</h4>
                                <p className="text-normal">Originaire de Liège, j’y réalise un bachelier en sciences économiques et de gestion et en master en marketing à HEC-ULg. L'année qui suit mon diplôme (étant toujours à la recherche de ma vocation), je me lance dans une formation d’un an en développement web avec l’organisation Becode. Bien que très enrichissante (surtout dans le domaine de l’auto-apprentissage), je me sens toujours aussi désemparé, je décide alors de réaliser un rêve; partir plus d’un an à l’aventure en amérique centrale pour y développer des projets de manière bénévole. Une expérience qui m’a grandi sur le plan professionnel mais surtout sur le plan humain. Puis le covid est arrivé et a tout chamboulé: retour en Belgique prématurée sans réelle idée de quoi faire...
                                <br/><br/>Ce projet a germé dans ma tête durant les longues heures d'attente à l'aéroport. C'est pour moi l'occasion de prendre au sérieux une passion que je n'ai jamais vraiment envisagéé. A voir où cela me mènera</p>
                            </div>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Mon style...</h4>
                                <p className="text-normal">Je représente la vie, les humains, la nature, toute sorte d’être vivant en plus ou moins gros plan.<br/>
                                J’abuse des couleurs dans le but d’apporter un peu de chaleur, tendresse ou poésie à mes oeuvres.<br/>
                                J’utilise des traits/lignes propres (parfois d’autres éléments) qui s’entrecroisent pour donner vie aux illustrations.<br/>
                                J’exprime des compositions graphiques simplistes (rarement complexes et détaillées).<br/>
                                Mais au final, je me cherche encore et j’évolue au fil du temps.</p>
                            </div>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Mes maîtres mots...</h4>
                                <p className="text-normal">Simplicité, générosité, empathie et amour.</p>
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
                            <p className="text-normal">Ou plutôt tu souhaiterais une oeuvre particulière pour toi, ton commerce ou une connaissance? Collaborons ensemble pour la réaliser.<br/>
                            Quelques idées: caricature pour un anniversaire, fresque murale, personnalisation d’un objet ancien en objet d’art, réalisation d’une oeuvre personnel...</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h3-title">M’inspirer</h3>
                            <p className="text-normal">Partage-moi tes idées, tes remarques ou tes défis afin que je ne tombe jamais à court d’imagination! Ne sois pas timide, les meilleures idées sont trop souvent celles qu’on ne partage pas.</p>
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