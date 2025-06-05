import RecipeCard from "./RecipeCard";
import { recipes } from "../../data/recipes.js";
import PaginationSlider from "./PaginationSlider";
import { useState, useRef } from "react";
import "./Recipe.css";

let ITEMS_PER_PAGE = 8;

function RecipeGrid() {
  if (window.innerWidth <= 600) {
    ITEMS_PER_PAGE = 6;
  } else if (window.innerWidth <= 800) {
    ITEMS_PER_PAGE = 4;
  } else if (window.innerWidth <= 1200) {
    ITEMS_PER_PAGE = 6;
  } else {
    ITEMS_PER_PAGE = 8;
  }
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(recipes.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const visibleItems = recipes.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const gridRef = useRef(null);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setTimeout(() => {
      if (gridRef.current) {
        gridRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      <div ref={gridRef} className="recipe-grid">
        {visibleItems.map((recipe, index) => (
          <RecipeCard key={recipe.id} {...recipe} delay={index * 0.3} />
        ))}
      </div>
      <PaginationSlider
        page={page}
        setPage={handlePageChange}
        totalPages={totalPages}
      />
    </>
  );
}

export default RecipeGrid;
