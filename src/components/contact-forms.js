import React from 'react'
import emailjs from "emailjs-com";
import contactFormStyles from "./contact-forms.module.scss";

const ContactForms = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('un-an-de-couleurs', 'discussion-mail', e.target, 'user_vjzPkHn9KPDGGjFZL8Lht')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
            e.target.reset()
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
                    <input className="form-input text-form" type="text" name="nom" placeholder="Votre doux nom" required/>
                    <input className="form-input text-form" type="email" name="mail" placeholder="Adresse mail" required/>
                    <input className="form-input text-form" type="text" name="sujet" placeholder="Sujet" required/>
                    <textarea className="form-input text-form" name="message" placeholder="Message" required/>
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