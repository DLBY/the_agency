import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import StudyCase from '../../Components/StudyCase/StudyCase';
import clients from '../../data/clients';
import PlatonImg from '../../asset/platonimg.jpeg';
import SedalImg from '../../asset/sedalimg.jpeg';
import SolanImg from '../../asset/solaneimg.jpeg';
import AgencyImg from '../../asset/agency.jpeg';

const Works = () => (
  <div data-aos="fade-up">
    <h3>Au fil des années, nous avons pu accompagner les meilleurs.</h3>
    <p>
      Découvrez pas à pas comment nous avons été présent pour lancer vos marques
      préférées.
    </p>
    <div className="studyCases-container">
      {clients.map((client) => (
        <Link to={`/works/${client.slug}`}>{client.name}</Link>
      ))}
    </div>
    <div className="img-container">
      <img src={PlatonImg} alt="PlatonImg" />
      <img src={SedalImg} alt="PlatonImg" />

      <img src={SolanImg} alt="PlatonImg" />
    </div>
    <Switch>
      <Route path="/works/:clientSlug">
        <StudyCase />
      </Route>
    </Switch>
  </div>
);

export default Works;
