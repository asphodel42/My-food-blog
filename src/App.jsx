import AboutBlock from "./components/AboutBlock/AboutBlock.jsx";
import RecipeGrid from "./components/RecipeCards/RecipeGrid.jsx";
import Calculator from "./components/Calculator/Calculator.jsx";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="sec-1" id="sec_1">
          <RecipeGrid></RecipeGrid>
        </section>
        <hr />
        <section className="sec-2" id="sec_2">
          <AboutBlock></AboutBlock>
        </section>
        <hr />
        <section className="sec-3" id="sec_3">
          <Calculator></Calculator>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
