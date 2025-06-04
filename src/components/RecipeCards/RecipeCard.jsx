import "./Recipe.css";
function RecipeCard({ image, title, description }) {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;
