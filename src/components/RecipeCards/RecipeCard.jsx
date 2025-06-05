import "./Recipe.css";
function RecipeCard({ image, title, description, delay }) {
  return (
    <div className="recipe-card" style={{ animationDelay: `${delay}s` }}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default RecipeCard;
