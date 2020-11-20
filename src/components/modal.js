import React from 'react'
import modalStyles from './modal.module.scss'

const Modal = (props) => props.isShowing &&
    <div className={modalStyles.background} onClick={props.hide}>
        <div className={modalStyles.modal}>
            <div className={modalStyles.close} onClick={props.hide}>
                <p className={modalStyles.cross}>X</p>
            </div>
            {props.success? 
                <>
                    <div className={modalStyles.success} >
                        <p className={modalStyles.iconText}>V</p>
                    </div>
                    <p className="text-normal">Le message s'est correctement envoyé.</p>
                </> :
                <>
                    <div className={modalStyles.fail}>
                        <p className={modalStyles.iconText}>X</p>
                    </div>
                    <p className="text-normal">Il y a eu une erreur {props.object === 'order' ? `à la soumission de la commande` : `l'envoi du message` }. Merci de bien vouloir réessayer ou me contacter par mail à l'adresse <b>organik.artist@gmail.com</b>.</p>
                </>
            }
            <div className={modalStyles.cta}>
                <div className={`button--outside button-link bg-color-cycle`} onClick={props.hide}>
                    <div className="button--inside">
                        OK
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Modal