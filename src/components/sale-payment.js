import React from 'react'
import ExitButton from './exit-button'
import ReCAPTCHA from "react-google-recaptcha";

import salePaymentStyles from './sale-payment.module.scss'

const SalePayment = (props) => props.isShowing &&

        <section className={props.css}>
            <ExitButton hide={props.hide} desc="Annuler" />
            <div className={salePaymentStyles.container}>
                <h4 className={`h3-title--important--white ${salePaymentStyles.title}`}>Commande</h4>
                <p className='text-very-small--white'>Dans l'attente de l'implémentation d'un système de payement et un éventuel moyen de livraison, le formulaire suivant sert de bon de commande. Je vous contacterai pour les modalités de payement et de livraison à la suite de son envoi.</p>
                <hr className={`divider ${salePaymentStyles.divider}`} style={{borderColor: props.color}}/>
                <div>
                    <p className='text-small--white'>{`Article: ${props.title}`}</p>
                    <p className='text-small--white'>{`Prix: ${props.cost? `minimum ${props.cost}` : props.sale}€`}</p>
                </div>
                <hr className={`divider ${salePaymentStyles.divider}`} style={{borderColor: props.color}}/>
                <form onSubmit={props.orderArticle}>
                    <input className="form-input text-form" style={{borderColor: props.color}} type="text" name="nom" value={props.nom} onChange={(e)=>props.setNom(e.target.value)} placeholder="Nom" required/>
                    {props.cost && <input className="form-input text-form" style={{borderColor: props.color}} type="number" min={props.cost} name="prix" value={props.prix} onChange={(e)=>props.setPrix(e.target.value)} placeholder="Prix d'achat" required/>}
                    <input className="form-input text-form" style={{borderColor: props.color}} type="text" name="adresse" value={props.adresse} onChange={(e)=>props.setAdresse(e.target.value)} placeholder="Commune/adresse" required/>
                    <input className="form-input text-form" style={{borderColor: props.color}} type="email" name="mail" value={props.mail} onChange={(e)=>props.setMail(e.target.value)} placeholder="Adresse mail" required/>
                    <textarea className="form-input text-form" style={{borderColor: props.color}} name="message" value={props.message} onChange={(e)=>props.setMessage(e.target.value)} placeholder="Remarque éventuelle" />
                    <div className={salePaymentStyles.recaptcha} style={{borderColor: props.color}}>
                        <ReCAPTCHA ref={props.recaptchaRef} sitekey={process.env.GATSBY_RECAPTCHA_KEY} onChange={() => props.setVerifiedRecaptcha(true)} size="compact" />
                    </div>
                    <div className={`button--outside bg-color-cycle ${salePaymentStyles.submit}`}>
                        <input className="button--inside" type="submit" value="Acheter"/>
                    </div>
                </form>
            </div>
        </section>
  



export default SalePayment