import React from "react";

class About extends React.Component {
  render() {
    const skills = ["HTML", "CSS", "JAVASCRIPT", "HTMLSEMANTICO", "FLEXBOX"]
    const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
    return (
      <div>
        <><h1>Marcos Paulo Pereira</h1><p>Apaixonado por Técnoliga e um cara sonhador!</p></>
        <h2>Minhas Habilidades</h2>
        <ul>
          {jsxSkills}
        </ul>
      </div>
    );
  }
}

export default About;