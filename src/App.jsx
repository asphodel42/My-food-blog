import AboutBlock from "./components/AboutBlock/AboutBlock.jsx";
import RecipeGrid from "./components/RecipeCards/RecipeGrid.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main>
        <div>
          <RecipeGrid></RecipeGrid>
        </div>
        <hr />
        <AboutBlock></AboutBlock>
      </main>
    </>
  );
}

export default App;
