import React, { useState } from 'react'
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Modal from "./modal"
import useModal from "../hooks/useModal";

import contactFormsStyles from "./contact-forms.module.scss"


const ContactForms = () => {

    const [ verifiedRecaptcha, setVerifiedRecaptcha ] = useState(false)
    const recaptchaRef = React.createRef()

    const [ sendMailSuccess, setSendMailSuccess ] = useState(false)
    const {isShowing, toggle} = useModal();

    function sendEmail(e) {
        e.preventDefault();

        if (verifiedRecaptcha) {
            emailjs.sendForm('un-an-de-couleurs', 'discussion-mail', e.target, 'user_vjzPkHn9KPDGGjFZL8Lht')
                .then((result) => {
                    setSendMailSuccess(true)
                    toggle();
                    console.log(result.text)
                }, (error) => {
                    toggle();
                    console.log(error.text);
                })
                e.target.reset()
                setSendMailSuccess(false)
        }
    }

    //!!!!!!!!! FAIRE UNE APP SPECIALE POUR ENVOYER UN MESSAGE DANS UNE BASE DE DONNEE OU AUTRE APP

    // function sendMessage(e) {
    //     e.preventDefault();

    //     emailjs.sendForm('un-an-de-couleurs', 'message-rapide', e.target, 'user_vjzPkHn9KPDGGjFZL8Lht')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         })
    //         e.target.reset()
    // }
    return (
        <>
            <div className="content-container">
                <h4 className="h3-title">Discussion par mail</h4>
                <form onSubmit={sendEmail}>
                    <input className="form-input text-form" type="text" name="nom" placeholder="Votre joli nom" required/>
                    <input className="form-input text-form" type="email" name="mail" placeholder="Adresse mail" required/>
                    <input className="form-input text-form" type="text" name="sujet" placeholder="Sujet" required/>
                    <textarea className="form-input text-form" name="message" placeholder="Message" required/>
                    <div className={contactFormsStyles.recaptcha}>
                        <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.GATSBY_RECAPTCHA_KEY} onChange={() => setVerifiedRecaptcha(true)} size="compact"/>
                    </div>
                    <div className="button--outside bg-color-cycle">
                        <input className="button--inside" type="submit" value="Envoyer"/>
                    </div>
                </form>
            </div>
            {/* <div className="content-container">
                <h4 className="h3-title">Message rapide et anonyme</h4>
                <form onSubmit={sendMessage}>
                    <textarea className="form-input text-form" name="message" placeholder="Message" required/>
                    <div className="button--outside bg-color-cycle">
                        <input className="button--inside" type="submit" value="Envoyer"/>
                    </div>
                </form>
            </div> */}
            <Modal isShowing={isShowing} objec="message" hide={toggle} success={sendMailSuccess}/>
        </>      
    )
}

export default ContactForms