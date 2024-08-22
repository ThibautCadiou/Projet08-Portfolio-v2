import React from "react";
import Accueil from "./components/Accueil";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reseaux from "./components/Reaseaux";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <React.Fragment key={"firstKey"}>
      <Header />
      <main className="main">
        <Accueil />
        <Portfolio />
        <div className="reseaux-et-contact">
          <Reseaux />
          <Contact />
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
