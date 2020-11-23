import React from "react"
import footerStyles from "./footer.module.scss"
import InstagramIcon from "../assets/instagram-icon.svg"

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.container}>
                <div className={footerStyles.summary}>
                    <div className={footerStyles.divcontainer}>
                        <p className="text-small--white">Un an de couleurs est un projet artistique de Olivier Keutgens alias Organik.<br/>
                        Le concept est de partager des oeuvres artistiques quotidiennement pendant un an. La plupart des oeuvres sont desponibles à la vente à prix libres, en plus de la possibilité de faire une commande personnelles.</p>
                    </div>
                </div>
                <div className={footerStyles.social}>
                    <div className={footerStyles.divcontainer}>
                        <p className={footerStyles.subtitle}>S'abonner</p> 
                        <a href="https://www.instagram.com/organik.artist/" target="_blank" rel="noreferrer" className={footerStyles.link}><InstagramIcon className={footerStyles.icon} /></a>
                    </div>
                </div>
                <div className={footerStyles.contact}>
                    <div className={footerStyles.divcontainer}>
                        <p className={footerStyles.subtitle}>Me contacter</p> 
                        <p className="text-small--white">organik.artist@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={footerStyles.divcontainer}>
                <p className={`text-very-small ${footerStyles.copyright}`}>Réalisé par Olivier Keutgens. ©2020</p>
            </div>
        </footer>
    )
}

export default Footer