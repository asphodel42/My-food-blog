import AboutBlock from "./components/AboutBlock/AboutBlock.jsx";
import RecipeGrid from "./components/RecipeCards/RecipeGrid.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <RecipeGrid></RecipeGrid>
        <AboutBlock></AboutBlock>
      </main>
    </>
  );
}

export default App;
