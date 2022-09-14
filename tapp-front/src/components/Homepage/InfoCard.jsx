import React from "react";
import "../Homepage/InfoCard.scss"
function InfoCards ({cardsArray}) {
   
    
if (!cardsArray.length) { return <></>}
    return (
        cardsArray.map((card, index) => 
        <article key={index}>
            <div>
                <img className="icons" src={card?.img} alt={card?.alt} />
            </div>
            <h3>
                {card?.title}
            </h3>
            <p>
                {card?.text}
            </p>
        </article>)
    )
}
export default InfoCards