import React from 'react'
import ExitButton from './exit-button'
import paymentStyles from './payment.module.scss'
import contactFormStyles from './contact-forms.module.scss'

const Payment = (props) => props.isShowing &&

        <section className={props.css}>
            <ExitButton hide={props.hide} desc="Annuler" />
            <div className="paragraph-container">
                <h4 className="h1-title">Commande</h4>
                <p className='text-small'>Dans l'attente de l'implémentation d'un système de payement et un éventuel moyen de livraison, le formulaire suivant sert de bon de commande. Je vous contacterai pour les modalités de payement et de livraison à la suite de son envoi.</p>
                <div>
                    <p>{`Article: ${props.title}`}</p>
                    <p>{`Prix: ${props.cost? `minimum ${props.cost}` : props.sale}€`}</p>
                </div>
                <form onSubmit={props.orderArticle}>
                    <input className={contactFormStyles.input + ` text-form`} type="text" name="nom" placeholder="Votre doux nom" required/>
                    {props.cost && <input className={contactFormStyles.input + ` text-form`} type="number" min={props.cost} name="prix" placeholder="Prix d'achat" required/>}
                    <input className={contactFormStyles.input + ` text-form`} type="text" name="adresse" placeholder="Commune/adresse" required/>
                    <input className={contactFormStyles.input + ` text-form`} type="email" name="mail" placeholder="Adresse mail" required/>
                    <textarea className={contactFormStyles.input + ` text-form`} name="message" placeholder="Remarque éventuelle" />
                    <div className="button--outside bg-color-cycle">
                        <input className="button--inside" type="submit" value="Acheter"/>
                    </div>
                </form>
            </div>
        </section>
  



export default Payment