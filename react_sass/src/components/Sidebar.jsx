

import Avatar from "../img/eu.jpg"
import "../styles/components/sidebar.sass"
import SocialNetworks from "./SocialNetworks"



const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Thiago Gramuglia" />
    <p className="title">Desenvolvedor FullStack</p>
    <SocialNetworks/>
    <p>Informações de Contato</p>
    <a href="" className="btn">Download Currículo</a>

  
  </aside>
  
}

export default Sidebar