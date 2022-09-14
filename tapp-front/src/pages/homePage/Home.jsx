import React from "react";

import "../homePage/Home.scss"
import Banner from "../../components/Homepage/Banner";
import InfoCards from "../../components/Homepage/InfoCard";
import infoCardsArray from "../../data/infoCardsArray";

function Home () {
    return (
        <main id="homePage">
        <Banner />
        <section className="infosCard-container">
            <InfoCards cardsArray={infoCardsArray} />
        </section>

    </main>
    )
}

export default Home