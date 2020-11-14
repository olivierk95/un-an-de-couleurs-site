import React, { useState } from 'react'
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import contactFormsStyles from "./contact-forms.module.scss"


const ContactForms = () => {

    const [ nom, setNom ] = useState('')
    const [ mail, setMail ] = useState('')
    const [ sujet, setSujet ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ verifiedRecaptcha, setVerifiedRecaptcha ] = useState(false)
    const recaptchaRef = React.createRef()

    function sendEmail(e) {
        e.preventDefault();

        const recaptchaValue = recaptchaRef.current.getValue();
        
        const templateParams = {
            nom,
            mail,
            sujet,
            message,
        };
        
        console.log(recaptchaValue)
        console.log(templateParams)

        if (verifiedRecaptcha) {
            emailjs.sendForm('un-an-de-couleurs', 'discussion-mail', templateParams, 'user_vjzPkHn9KPDGGjFZL8Lht')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
            
            setNom('')
            setMail('')
            setSujet('')
            setMessage('')
            setVerifiedRecaptcha(false)
        }
    }

    function sendMessage(e) {
        e.preventDefault();

        emailjs.sendForm('un-an-de-couleurs', 'message-rapide', e.target, 'user_vjzPkHn9KPDGGjFZL8Lht')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            e.target.reset()
    }
    return (
        <>
            <div className="content-container">
                <h4 className="h3-title">Discussion par mail</h4>
                <form onSubmit={sendEmail}>
                    <input className="form-input text-form" type="text" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder="Votre doux nom" required/>
                    <input className="form-input text-form" type="email" name="mail" value={mail} onChange={(e) => setMail(e.target.value)} placeholder="Adresse mail" required/>
                    <input className="form-input text-form" type="text" name="sujet" value={sujet} onChange={(e) => setSujet(e.target.value)} placeholder="Sujet" required/>
                    <textarea className="form-input text-form" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required/>
                    <div className={contactFormsStyles.recaptcha}>
                        <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.RECAPTCHA_KEY} onChange={() => setVerifiedRecaptcha(true)} />
                    </div>
                    <div className="button--outside bg-color-cycle">
                        <input className="button--inside" type="submit" value="Envoyer"/>
                    </div>
                </form>
            </div>
            <div className="content-container">
                <h4 className="h3-title">Message rapide et anonyme</h4>
                <form onSubmit={sendMessage}>
                    <textarea className="form-input text-form" name="message" placeholder="Message" required/>
                    <div className="button--outside bg-color-cycle">
                        <input className="button--inside" type="submit" value="Envoyer"/>
                    </div>
                </form>
            </div>
        </>      
    )
}

export default ContactForms