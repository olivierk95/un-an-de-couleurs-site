import React from 'react'
import ExitButton from './exit-button'
import paymentStyles from './sale-payment.module.scss'
import contactFormStyles from './contact-forms.module.scss'

const SalePayment = (props) => props.isShowing &&

        <section className={props.css}>
            <ExitButton hide={props.hide} desc="Annuler" />
            <div className={paymentStyles.container}>
                <h4 className="h3-title--white">Commande</h4>
                <p className='text-very-small--white'>Dans l'attente de l'implémentation d'un système de payement et un éventuel moyen de livraison, le formulaire suivant sert de bon de commande. Je vous contacterai pour les modalités de payement et de livraison à la suite de son envoi.</p>
                <div>
                    <p>{`Article: ${props.title}`}</p>
                    <p>{`Prix: ${props.cost? `minimum ${props.cost}` : props.sale}€`}</p>
                </div>
                <form onSubmit={props.orderArticle}>
                    <input className="form-input text-form" style={{borderColor: props.color}} type="text" name="nom" placeholder="Votre doux nom" required/>
                    {props.cost && <input className="form-input text-form" style={{borderColor: props.color}} type="number" min={props.cost} name="prix" placeholder="Prix d'achat" required/>}
                    <input className="form-input text-form" style={{borderColor: props.color}} type="text" name="adresse" placeholder="Commune/adresse" required/>
                    <input className="form-input text-form" style={{borderColor: props.color}} type="email" name="mail" placeholder="Adresse mail" required/>
                    <textarea className="form-input text-form" style={{borderColor: props.color}} name="message" placeholder="Remarque éventuelle" />
                    <div className="button--outside bg-color-cycle">
                        <input className="button--inside" type="submit" value="Acheter"/>
                    </div>
                </form>
            </div>
        </section>
  



export default SalePayment