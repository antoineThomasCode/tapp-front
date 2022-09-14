import React from "react";
import Slogan from "./Slogan"; 
import bannerImage from "../../assets/images/bank-tree.jpeg";
import "../Homepage/Banner.scss"


function Banner () {
    return (
        <section className="banner-container">
            <figure>
                <img src={bannerImage} alt="Plante qui pousse dans une verre rempli de pièces de monnaie" />
            </figure>
            <Slogan />
        </section>
    )
} 
export default Banner