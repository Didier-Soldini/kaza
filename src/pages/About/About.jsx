import React from 'react'
import Banner from '../../components/Banner/Banner'
import bannerImage from '../..//assets/banner--about.webp'
import Collapse from './../../components/Collapse/Collapse';

const About = () => (
  <div className="about">
    <Banner image={bannerImage} showText={false} />
    <div className="about__collapses">
      <Collapse
        className={`collapseAbout`}
        headerClassName={`collapseAbout__header`}
        titleClassName={`collapseAbout__title`}
        title={'Fiabilité'}
        children={
          'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
        }
      />
      <Collapse
        className={`collapseAbout`}
        headerClassName={`collapseAbout__header`}
        titleClassName={`collapseAbout__title`}
        title={'Respect'}
        children={
          'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        }
      />
      <Collapse
        className={`collapseAbout`}
        headerClassName={`collapseAbout__header`}
        titleClassName={`collapseAbout__title`}
        title={'Service'}
        children={
          "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        }
      />
      <Collapse
        className={`collapseAbout`}
        headerClassName={`collapseAbout__header`}
        titleClassName={`collapseAbout__title`}
        title={'Sécurité'}
        children={
          "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
      />
    </div>
  </div>
)

export default About
