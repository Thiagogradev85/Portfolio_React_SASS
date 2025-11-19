import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/eu.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Thiago Gramuglia" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="https://www.linkedin.com/in/thiagogradev/?trk=opento_sprofile_topcard/" className="btn" >
       PDF Baixe Meu Linkedin em 
      </a>
    </aside>
  );
};

export default Sidebar;
