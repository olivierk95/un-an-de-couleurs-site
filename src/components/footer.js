import React from "react"
import footerStyles from "./footer.module.scss"
import InstagramIcon from "../assets/instagram-icon.svg"

const Footer = () => {
    return (
        <footer>
            <div className={footerStyles.container}>
                <div className={footerStyles.summary}>
                    <div className={footerStyles.divcontainer}>
                        <p className="text-small--white">Un an de couleurs est un projet artistique de Olivier Keutgens, Organik de mon nom d’artiste.<br/>
                        Le concept étant de partager mes créations quotidiennes au court d’une année. Il s’agit d’un petit défi personnel. A voir où cela m’amènera.</p>
                    </div>
                </div>
                <div className={footerStyles.social}>
                    <div className={footerStyles.divcontainer}>
                        <p className={footerStyles.subtitle}>Espionnez-moi</p> 
                        <a href="https://www.instagram.com/organik.artist/" target="_blank" rel="noreferrer" className={footerStyles.link}><InstagramIcon className={footerStyles.icon} /></a>
                    </div>
                </div>
                <div className={footerStyles.contact}>
                    <div className={footerStyles.divcontainer}>
                        <p className={footerStyles.subtitle}>M'accoster</p> 
                        <p className="text-small--white">organik.artist@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className={footerStyles.divcontainer}>
                <p className={footerStyles.copyright}>Réalisé par Olivier Keutgens. Tous droits réservés. ©2020</p>
            </div>
        </footer>
    )
}

export default Footer