import React from 'react'
import Layout from "../components/layout"
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"
import ContactForms from "../components/contact-forms"

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
            <div className={proposStyles.container}>
                <section className={proposStyles.projet}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">Projet</h2>
                        <div>
                            <h3 className="font-color-cycle h2-title">Un an de quoi? C'est quoi cette histoire?</h3> 
                            <p className="text-normal">Un an de COULEURS! En très résumé: un an ou je me bouge le derrière à produire 6 oeuvres par semaine (pour la forme, à défaut de faire de la gonflette).
                            <br/><br/>
                            <b>Pour vous</b>, c’est l’occasion de découvrir mon univers et être témoin de mon évolution artistique au jour le jour.
                            <br/><br/>
                            <b>Pour moi</b>, c’est un l’occasion de me mettre au défi, de peindre sur de nouveau type de support, d’expérimenter de nouvelles techniques et de faire voyager mon imagination.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="font-color-cycle h2-title">Pourquoi me donner cette "peine"?</h3> 
                            <div>
                                <h4 className="h3-title">C'est une année de merde...</h4>
                                <p className="text-normal">Ce n’est une nouvelle pour personne mais l’année 2020 est a effacer des mémoires et la suite ne s’annonce guère plus alléchante; crise économique, crise sanitaire, crise écologique, crise humanitaire, montée des extrémismes,.. La réelection de Donald!?
                                <br/><br/>
                                Bref, rien de très joyeux, mais ce serait dommage d’arrêter de vivre avec des paillettes dans les yeux. Loin de moi l’idée de remplacer votre mascara, mais si je peux vous amener un peu de couleurs et de tendresse par mes illustrations, mon défi serait plus que réussi.</p>
                            </div>
                            <div className="paragraph-container">
                                <h4 className="h3-title">J’avais pas envie de me tourner les pinceaux...</h4>
                                <p className="text-normal">Après un voyage ultra enrichissant au Mexique et au Guatemala à travailler bénévolement sur différents projets locaux, j’ai moi-même eu envie de lancer mon propre petit projet personel. Etant donné que je suis à la recherche d’emploi (avec des critères (trop) sélectifs) et que la période actuelle est plutôt propice au travail en espace fermé et sans contact humain, je ne pense pas me trompé en disant que c’est une initiative parfaitement adaptée à la situation.</p>
                            </div>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Et puis bon, c’est quelque une passion depuis tout petit...</h4>
                                <p className="text-normal">Cela fait depuis bout’chou que je dessine et que j’adore ça. Le fait est que je ne me suis jamais vraiment pris au sérieux. “Oui mais tu sais il y tchic et tchac qui sont beaucoup plus doués”, “nan mais c’est juste un passe-temps et c’est super dur d’en vivre”, “c’est pas ouf, je pense que je pourrait améliorer quelques trucs”... il est venu le temps de mettre un peu plus dans le bain (sans m’y couler) et voir où cela me mènera.</p>
                            </div>
                        </div>
                        <div className="content-container">
                            <h3 className="font-color-cycle h2-title">Organik? C’est qui ce pseudo-artiste au nom composté?</h3> 
                            <p className="text-normal">O-livier K-eutgens, alias O-rgani-K, comme ça toi aussi tu sais le secret. ;-)</p>
                            <div className="paragraph-container">
                                <h4 className="h3-title">Mon parcours atypique...</h4>
                                <p className="text-normal">Originaire de Liège, j’y réalise un bachelier en sciences économiques et de gestion et en master en marketing à HEC-ULg. Je me rends bien vite compte que ça ne correspond pas et je ne sais trop dans quelle direction aller. L’année qui suit je me lance dans une formation d’un an en développement web avec l’organisation BeCode. Bien que très enrichissante (surtout dans le domaine de l’auto-apprentissage), je me sens toujours aussi perdu, je décide donc de réaliser un rêve; partir plus d’un an à l’aventure en amérique centrale pour y développer des projets de volontariat requérant mes compétences. Une expérience qui m’a grandi sur le plan professionnel mais surtout comme personne.</p>
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
                                <h4 className="h3-title">Ma philosophie...</h4>
                                <p className="text-normal">Il n’y rien de plus beau et sincère qu’un être qui partage son temps sans l’espoir d’une contrepartie.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={proposStyles.sos}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">SOS</h2>
                        <div>
                            <h3 className="h2-title font-color-cycle">Tu souhaites m’aider?</h3>
                            <p className="text-normal">J’ai besoin de supports (objets, tableaux, panneaux, etc.), peintures, de cadres et pinceaux en tout genre pour réaliser des oeuvres. Toute donation est accueillie avec ma plus sincère reconnaissance, d’autant plus si cela permet de recycler un objet inutilisé.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h2-title font-color-cycle">Tu désires m’avoir en peinture?</h3>
                            <p className="text-normal">Ou plutôt tu souhaiterais une oeuvre particulière pour toi, ton commerce ou une connaissance? Collaborons ensemble pour la réaliser.<br/>
                            Quelques idées: caricature pour un anniversaire, fresque murale, personnalisation d’un objet ancien en objet d’art, réalisation d’une oeuvre personnel...</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h2-title font-color-cycle">Tu aspires à m’inspirer?</h3>
                            <p className="text-normal">Partage-moi tes idées, tes remarques ou tes défis afin que je ne tombe jamais à court d’imagination! Ne sois pas timide, les meilleures idées sont trop souvent celles qu’on ne partage pas.</p>
                        </div>
                        <div className="content-container">
                            <h3 className="h2-title font-color-cycle">Tu veux me motiver?</h3>
                            <p className="text-normal">Un petit message de soutien, une bonne intention ou même une lettre d’amour ça fait toujours plaisir à recevoir et c’est ce qui donne vraiment des ailes (contrairement à la célèbre boisson). Ouvrir nos coeurs c’est la clé pour un monde meilleur!</p>
                        </div>
                    </div>
                </section>
                <section className={proposStyles.contact}>
                    <div className={proposStyles.sectioncontainer}>
                        <h2 className="font-color-cycle h1-title">Contact</h2>
                        <p className="text-normal">Mail: organik.artist@gmail.com</p>
                        <ContactForms />
                        <div className="paragraph-container">
                            <h4 className="h3-title">Espionnez-moi</h4> 
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