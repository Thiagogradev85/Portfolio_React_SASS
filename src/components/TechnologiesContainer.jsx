import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass,
  DiBootstrap,
  DiDotnet,
  DiGulp,
  DiGithubBadge,
  
} from "react-icons/di";

import {
  SiTailwindcss,
  SiCsharp,
  SiJava

} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "SiCsharp", name: "C#", icon: <SiCsharp /> },
  { id: "dotnet", name: "Dotnet", icon: <DiDotnet /> },
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "SiJava", name: "Java", icon: <SiJava /> },
  { id: "sass", name: "SASS", icon: <DiSass /> },
  { id: "bootstrap", name: "Bootstrap", icon: <DiBootstrap /> },  
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "react", name: "React", icon: <DiReact /> },  
  { id: "gulp", name: "Gulp", icon: <DiGulp /> },
  { id: "github", name: "Github", icon: <DiGithubBadge /> },
  { id: "tailwindcss", name: "Tailwindcss", icon: <SiTailwindcss /> },
 
  
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
             
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
