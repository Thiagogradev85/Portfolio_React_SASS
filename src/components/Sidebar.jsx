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
      <a href="https://www.linkedin.com/in/thiago-gramuglia-b0449b3a/" className="btn" >
        Baixe Meu Linkedin em PDF
      </a>
    </aside>
  );
};

export default Sidebar;
