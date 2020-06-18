import React from 'react'
import Title from '../components/Title'
import { Flip } from 'react-reveal'


const Cleaning = () => {
    return (
        <div className="cleaningfeats">
            <Title title="Tout les produits d'entretien et services"/>
            
            {/* {cleaning.map((cleaningItem, i) => {
            const {name, url, description, disponible, prix} = cleaningItem */}
            {/* return ( */}
                <Flip delay={80} bottom>
                    <h3>Cette Rubrique est en cours de développement. Pour plus d'infos,
                    joignez nous via les réseaux sociaux et contact form.</h3>
                    {/* <div className="cleaning__item">
                        <div className="cleaning__name">
                        {name}
                            <div className="cleaning__thumbnail">
                                <img src={url} alt={name} className="cleaning__img" />
                            </div>
                            <div className="cleaning__description">
                                {description}
                            </div>
                        </div>
                        <div className="cleaning__details">
                            <div className="cleaning__disponible">
                                {disponible}
                            </div>
                            <div className="cleaning__prix">
                                {prix}€/h(si applicable)
                            </div>
                            <button className="btn btn-primary">
                            J'ajoute la formule
                            </button>
                        </div>
                    </div> */}
                </Flip>
            {/* )
        })} */}
    </div>
    )
}

export default Cleaning