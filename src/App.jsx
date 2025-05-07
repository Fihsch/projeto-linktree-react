import React from "react";
import { links } from "./data/links";
import LinkButton from "./components/LinkButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="/foto.jpg" alt="Minha foto" className="profile-pic" />
      <h2>Filipe Scheid</h2>
      <p>Desenvolvedor de Software</p>
      <div className="links-container">
        {links.map((link, index) => (
          <LinkButton key={index} {...link} />
        ))}
      </div>
    </div>
  );
}

export default App;
