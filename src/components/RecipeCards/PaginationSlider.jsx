import "./Recipe.css";
function PaginationSlider({ page, setPage, totalPages }) {
  return (
    <div className="pagination">
      <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>‹</button>
      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={page === i + 1 ? "active" : ""}
        >
          {i + 1}
        </button>
      ))}
      <button onClick={() => setPage((p) => Math.min(p + 1, totalPages))}>
        ›
      </button>
    </div>
  );
}

export default PaginationSlider;
