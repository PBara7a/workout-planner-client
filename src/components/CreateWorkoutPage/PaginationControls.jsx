const PaginationControls = ({
  page,
  setPage,
  numOfExercises,
  numOfCardsPerPage,
}) => {
  return (
    <nav className="page-controls">
      <button onClick={(e) => setPage(1)}>&laquo;</button>
      <button onClick={(e) => setPage(page - 1)}>&lt;</button>
      <input
        type="number"
        min={1}
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      <button onClick={(e) => setPage(page + 1)}>&gt;</button>
      <button
        onClick={(e) => setPage(Math.ceil(numOfExercises / numOfCardsPerPage))}
      >
        &raquo;
      </button>
    </nav>
  );
};

export default PaginationControls;
