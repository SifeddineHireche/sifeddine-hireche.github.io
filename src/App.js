import React, { useState } from 'react';
import Header from './components/header';
import About from './components/about';
import Timeline from './components/timeline';
import Contact from './components/contact';
import Footer from './components/footer';
import ExperienceSection from './components/experienceSection'; 
import checkImage from './checkOK.png'; 
import bookImage from './book.jpg'; 
import outilsImage from './outils.jpg'; 

import './App.css';

function App() {
const translations = {
  fr: {
    name: "Sifeddine HIRECHE",
    title: "Developpeur Fullstack",
    aboutTitle: "À propos de moi",
    aboutDescription: "Je suis un développeur Web avec une expérience dans la création de sites Web modernes et fonctionnels. Je suis passionné par le design et la technologie.",
    timelineTitle: "Experiences",
    projects: [
      { year: "Juillet 2023 – actuellement", title: "BALOO - MARSEILLE", description: "Développement de deux batchs, pour la création et l’affiliation des salaries et ces ayants droits" },
      { year: "Janvier 2023 – Juin 2023", title: "DARVA - NIORT", description: "Développement d´un chat pour simplifier la communication entre les gestionnaires" },
      { year: "Juin 2019 – Décembre 2022", title: "LA MAPA - SAINT JEAN D'ANGELY", description: "Développement de la structure des avenants ainsi que l'implementation des Virements IJ, pour paiements en Virement." },
      { year: "Novembre 2018 – Mai 2019", title: "GEODIS - PARIS", description: "Implémentation d'un TMS pour la gestion du transport de messagerie et affrètement." },
      { year: "Mars 2018 – Septembre 2018", title: "ODEI - Vitoria ", description: "Implémentation des pages web du gouvernement Basque (Gobierno Vasco). Projet registre électronique PACS avec le framework UDA ainsi que télétramitatión publique du gouvernement Basque." },
      { year: "Janvier 2017 – Mai 2017", title: "ISM MED - Marseille", 
        description: "Développement d'une page Web pour partager des frais de voyage pour des déplacements sur Marseille développé "}
    ],
    contactTitle: "Contact",
    email: "hireche8@gmail.com",
    linkedin: "sifeddine-hireche-b4a578148",
    footerText: "Sifeddine HIRECHE",
    titleSection1: "7 ans d'expérience",
    contentSection1: "Développeur fullstack depuis 7 ans d'experience, ayant colaboré dans plusiers projets dans l'assurance et le transport. J'apport des solutions a vos problématiques.",
    titleSection2: "un développeur avec  une vrai vision du recrutement",
    contentSection2: "J'ai aidé plusieurs Startup a trouvé des profiles pour leur besoin en developpement grace a notre CodingHub Talent",
    titleSection3: "Frameworks modernes et en formation continue",
    contentSection3: "Spécialisé dans les technologies Java, ainsi que des frameworks comme Angular, React , Node, Boostrap. Je continue a me former périodiquement"
  
  },
  en: {
    name: "Sifeddine HIRECHE",
    title: "Web Developer",
    aboutTitle: "About Me",
    aboutDescription: "I am a web developer with experience in creating modern and functional websites. I am passionate about design and technology.",
    timelineTitle: "Experiences",
    projects:[
    { year: "July 2023 – currently", title: "BALOO - MARSEILLE", description: "Development of two batches, for the creation and affiliation of employees and their beneficiaries" },
    { year: "January 2023 – June 2023", title: "DARVA - NIORT", description: "Development of a chat to simplify communication between managers" },
    { year: "June 2019 – December 2022", title: "LA MAPA - SAINT JEAN D'ANGELY", description: "Development of the structure of amendments as well as the implementation of IJ Transfers, for payments by Transfer." },
    { year: "November 2018 – May 2019", title: "GEODIS - PARIS", description: "Implementation of a TMS for the management of logistic and chartering." },
    { year: "March 2018 – September 2018", title: "ODEI - Vitoria ", description: "Implementation of the Basque Government (Gobierno Vasco) web pages. PACS electronic registry project with the UDA framework as well as public teletransmission of the Basque Government." },
    { year: "January 2017 – May 2017", title: "ISM MED - Marseille",
    description: "Development of a web page to share travel expenses for trips to Marseille developed "}
    ],
    contactTitle: "Contact",
    email: "hireche8@gmail.com",
    linkedin: "sifeddine-hireche-b4a578148",
    footerText: "Sifeddine HIRECHE",
    titleSection1: "7 yeas experience",
    contentSection1: "Web developer for 7 years, having worked on numerous projects in insurrance and logistic, I understand your issues.",
    titleSection2: "Vision of recruitment",
    contentSection2: "I have helped several Startups find profiles for their development needs thanks to our CodingHub Talent.",
    titleSection3: "Modern frameworks ",
    contentSection3: "Specialized in Java technologies, as well as frameworks like Angular, React, Node, Boostrap. I continue to learn myself."
  }
};


  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const content = translations[language];

  return (
    <div>
      <Header name={content.name} title={content.title} />
      <nav>
        <button onClick={() => changeLanguage('fr')}>Francais</button>
        <button onClick={() => changeLanguage('en')}>English</button>
      </nav>
      <About aboutTitle={content.aboutTitle} aboutDescription={content.aboutDescription} />
      <table>
        <td><ExperienceSection titleSection={content.titleSection1} contentSection= {content.contentSection1} image = {checkImage}/></td>
        <td><ExperienceSection titleSection={content.titleSection2} contentSection= {content.contentSection2} image={bookImage}/></td>
        <td><ExperienceSection titleSection={content.titleSection3} contentSection= {content.contentSection3} image={outilsImage}/></td>
      </table>
      <Timeline projects={content.projects} timelineTitle={content.timelineTitle} />
      <Contact contactTitle={content.contactTitle} email={content.email} linkedin={content.linkedin} />
      <Footer footerText={content.footerText} />
    </div>
  );
}

export default App;