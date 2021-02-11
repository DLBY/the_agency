import React from 'react';
import AgencyImg from '../../asset/agency.jpeg';

const Home = () => (
  <div data-aos="fade-up" className="home">
    <div className="homeHeader">
      <h3>Confiez vos rêves à des experts du Web</h3>
      <p>
        Grâce à notre savoir-faire, notre expérience et notre écoute, nous
        accompagnons nos clients dans la création de site internet: étude, UX,
        conception, design, développement, SEO. Notre agence web est capable de
        répondre à tous vos besoins et d&apos;élaborer une véritable stratégie
        digitale.
      </p>
    </div>
    <div className="homeImg">
      <img src={AgencyImg} alt="agencyImg" />
    </div>
    <button type="button" className="cat">
      Découvrez-nous !
    </button>
  </div>
);

export default Home;
