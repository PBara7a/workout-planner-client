import { useTheme } from "../App";
import { MenuItem, Select, TextField } from "@mui/material";
import { Stack } from "@mui/system";

const FilterControls = ({
  filters,
  handleFilterChange,
  bodyparts,
  targets,
  equipments,
}) => {
  const { theme } = useTheme();

  return (
    <Stack direction="row" mb={1} spacing={1}>
      <Select
        className="custom-input"
        color={theme === "light" ? "primary" : "secondary"}
        value={filters.bodypartFilter}
        name="bodypartFilter"
        onChange={handleFilterChange}
        fullWidth
      >
        <MenuItem value="">--Group--</MenuItem>
        {bodyparts.map((part) => (
          <MenuItem className="option" key={part.id} value={part.id}>
            {part.name}
          </MenuItem>
        ))}
      </Select>

      <Select
        className="custom-input"
        color={theme === "light" ? "primary" : "secondary"}
        value={filters.targetFilter}
        name="targetFilter"
        onChange={handleFilterChange}
        fullWidth
      >
        <MenuItem value="">--Target--</MenuItem>
        {targets.map((target) => (
          <MenuItem className="option" key={target.id} value={target.id}>
            {target.name}
          </MenuItem>
        ))}
      </Select>

      <Select
        className="custom-input"
        color={theme === "light" ? "primary" : "secondary"}
        value={filters.equipmentFilter}
        name="equipmentFilter"
        onChange={handleFilterChange}
        fullWidth
      >
        <MenuItem value="">--Equipment--</MenuItem>
        {equipments.map((equipment) => (
          <MenuItem key={equipment.id} value={equipment.id}>
            {equipment.name}
          </MenuItem>
        ))}
      </Select>

      <TextField
        className="custom-input"
        color={theme === "light" ? "primary" : "secondary"}
        type="text"
        placeholder="name"
        name="name"
        value={filters.name}
        onChange={handleFilterChange}
        fullWidth
      />
    </Stack>
  );
};

export default FilterControls;
