import React from 'react'
import Layout from "../components/layout"
import Hero from "../components/hero"
import {graphql, useStaticQuery} from "gatsby"

const ProjectPage = () => {
    const data = useStaticQuery(graphql`
        query {
            images: file(relativePath: { eq: "projet-hero.jpeg" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Layout>
            <Hero image={data.images.childImageSharp.fluid} alt="Belle petite peinture"></Hero>
            <section>
                <div className="content-container">
                    <h2 className="font-color-cycle h2-title">Un an de quoi? C'est quoi cette histoire?</h2> 
                    <p className="text-normal">Un an de COULEURS! En très résumé: un an ou je me bouge le derrière à produire 6 oeuvres par semaine (pour la forme, à défaut de faire de la gonflette).</p>
                    <br/>
                    <p className="text-normal"><b>Pour vous</b>, c’est l’occasion de découvrir mon univers et être témoin de mon évolution artistique au jour le jour.</p>
                    <br/>
                    <p className="text-normal"><b>Pour moi</b>, c’est un l’occasion de me mettre au défi, de peindre sur de nouveau type de support, d’expérimenter de nouvelles techniques et de faire voyager mon imagination.</p>
                </div>
                <div className="content-container">
                    <h2 className="font-color-cycle h2-title">Pourquoi me donner cette "peine"?</h2> 
                    <div className="paragraph-container">
                        <h3 className="h3-title">C'est une année de merde...</h3>
                        <p className="text-normal">Ce n’est une nouvelle pour personne mais l’année 2020 est a effacer des mémoires et la suite ne s’annonce guère plus alléchante; crise économique, crise sanitaire, crise écologique, crise humanitaire, montée des extrémismes,.. La réelection de Donald!?</p>
                        <br/>
                        <p className="text-normal">Bref, rien de très joyeux, mais ce serait dommage d’arrêter de vivre avec des paillettes dans les yeux. Loin de moi l’idée de remplacer votre mascara, mais si je peux vous amener un peu de couleurs et de tendresse par mes illustrations, mon défi serait plus que réussi.</p>
                    </div>
                    <div className="paragraph-container">
                        <h3 className="h3-title">J’avais pas envie de me tourner les pinceaux...</h3>
                        <p className="text-normal">Après un voyage ultra enrichissant au Mexique et au Guatemala à travailler bénévolement sur différents projets locaux, j’ai moi-même eu envie de lancer mon propre petit projet personel. Etant donné que je suis à la recherche d’emploi (avec des critères (trop) sélectifs) et que la période actuelle est plutôt propice au travail en espace fermé et sans contact humain, je ne pense pas me trompé en disant que c’est une initiative parfaitement adaptée à la situation.</p>
                    </div>
                    <div className="paragraph-container">
                        <h3 className="h3-title">Et puis bon, c’est quelque une passion depuis tout petit...</h3>
                        <p className="text-normal">Cela fait depuis bout’chou que je dessine et que j’adore ça. Le fait est que je ne me suis jamais vraiment pris au sérieux. “Oui mais tu sais il y tchic et tchac qui sont beaucoup plus doués”, “nan mais c’est juste un passe-temps et c’est super dur d’en vivre”, “c’est pas ouf, je pense que je pourrait améliorer quelques trucs”... il est venu le temps de mettre un peu plus dans le bain (sans m’y couler) et voir où cela me mènera.</p>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ProjectPage