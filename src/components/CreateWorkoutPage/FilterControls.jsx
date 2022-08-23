import { useState } from "react";

const FilterControls = ({
  handleFilterChange,
  bodyparts,
  targets,
  equipments,
}) => {
  const [state, setState] = useState({
    bodypartFilter: "",
    targetFilter: "",
    equipmentFilter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });

    handleFilterChange(e);
  };

  return (
    <div className="exercises-filters">
      <select
        value={state.bodypartFilter}
        name="bodypartFilter"
        onChange={handleChange}
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
        value={state.targetFilter}
        name="targetFilter"
        onChange={handleChange}
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
        value={state.equipmentFilter}
        name="equipmentFilter"
        onChange={handleChange}
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
    </div>
  );
};

export default FilterControls;
