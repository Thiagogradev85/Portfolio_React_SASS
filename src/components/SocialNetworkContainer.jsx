import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworkcontainer.sass";

const socialNetworks = [
  { name: "linkedin", href:"https://www.linkedin.com/in/thiago-gramuglia-b0449b3a/", icon: <FaLinkedinIn /> },
  { name: "github", href:"https://github.com/Thiagogradev85", icon: <FaGithub /> },
  { name: "instagram", href:"https://www.instagram.com/thiagogra/", icon: <FaInstagram /> },
];

const SocialNetworkContainer = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a href={network.href} className="social-btn" id={network.name} key={network.name}>
          {network.icon}
        </a>

      
      ))}
    </section>
  );
};

export default SocialNetworkContainer;
