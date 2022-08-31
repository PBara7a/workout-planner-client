const PaginationControls = ({ page, setPage, handlePageChange }) => {
  return (
    <nav className="page-controls">
      <button onClick={() => handlePageChange("first")}>&laquo;</button>
      <button onClick={() => handlePageChange("previous")}>&lt;</button>
      <input
        type="number"
        min="1"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      <button onClick={() => handlePageChange("next")}>&gt;</button>
      <button onClick={() => handlePageChange("last")}>&raquo;</button>
    </nav>
  );
};

export default PaginationControls;
