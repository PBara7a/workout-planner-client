const FilterControls = ({
  filters,
  handleFilterChange,
  bodyparts,
  targets,
  equipments,
}) => {
  return (
    <div className="exercises-filters">
      <select
        value={filters.bodypartFilter}
        name="bodypartFilter"
        onChange={handleFilterChange}
      >
        <option className="option" value="">
          --Group--
        </option>
        {bodyparts.map((part) => (
          <option className="option" key={part.id} value={part.id}>
            {part.name}
          </option>
        ))}
      </select>

      <select
        value={filters.targetFilter}
        name="targetFilter"
        onChange={handleFilterChange}
      >
        <option className="option" value="">
          --Target--
        </option>
        {targets.map((target) => (
          <option className="option" key={target.id} value={target.id}>
            {target.name}
          </option>
        ))}
      </select>

      <select
        value={filters.equipmentFilter}
        name="equipmentFilter"
        onChange={handleFilterChange}
      >
        <option className="option" value="">
          --Equipment--
        </option>
        {equipments.map((equipment) => (
          <option className="option" key={equipment.id} value={equipment.id}>
            {equipment.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="name"
        name="name"
        value={filters.name}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default FilterControls;
