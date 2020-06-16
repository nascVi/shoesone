import React from 'react'
import Title from '../components/Title'
const Livraison = () => {
    return (
        <div className="livraison">
        <Title title="Livraisons"/>
            <p><strong>
            En raison de la crise sanitaire mondiale veuillez noter que nous avons temporairement étendu nos 
            délais de livraison. La date de livraison indiquée lors du paiement tiendra compte de cette 
            extension.</strong>
            </p>
            <p><strong>Dépôt de Martinique: </strong></p>
            {/* <p><u>Expédition et Livraison:</u></p> */}
            <p>- expédition sous 24h</p>
            <p>- Livraison par Colissimo ou remise en main propre (uniquement pour la Martinique)</p>
            <p>Pour plus d'info , nous vous prions de nous contacter via email sur : <a href="mailto:contact@shoesone972.com">contact@shoeosone972.com</a></p>
            <p><strong>Dépôt de Paris: </strong></p>
            <p><strong>En raison de la crise sanitaire mondiale veuillez noter que nous avons temporairement 
            étendu nos délais de livraison. La date de livraison indiquée lors du paiement tiendra compte 
            de cette extension.
            </strong></p>
            <p>Expédition sous 72h max.</p>
            <p>Livraison par Colissimo 10-15 jours pour les Dom Tom</p>
    </div>
    )
}

export  default Livraison
