import { useTheme } from "../App";
import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const PaginationControls = ({ page, setPage, handlePageChange }) => {
  const { theme } = useTheme();

  return (
    <Stack
      direction="row"
      spacing={1}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        variant="contained"
        color={theme === "light" ? "primary" : "secondary"}
        sx={{ height: "32px" }}
        onClick={() => handlePageChange("first")}
      >
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <Button
        variant="contained"
        color={theme === "light" ? "primary" : "secondary"}
        sx={{ height: "32px" }}
        onClick={() => handlePageChange("previous")}
      >
        <KeyboardArrowLeftIcon />
      </Button>
      <TextField
        className="custom-input"
        color={theme === "light" ? "primary" : "secondary"}
        size="small"
        sx={{ maxWidth: "75px" }}
        variant="outlined"
        type="number"
        min="1"
        value={page}
        onChange={(e) => setPage(e.target.value)}
      />
      <Button
        variant="contained"
        color={theme === "light" ? "primary" : "secondary"}
        sx={{ height: "32px" }}
        onClick={() => handlePageChange("next")}
      >
        <KeyboardArrowRightIcon />
      </Button>
      <Button
        variant="contained"
        color={theme === "light" ? "primary" : "secondary"}
        sx={{ height: "32px" }}
        onClick={() => handlePageChange("last")}
      >
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Stack>
  );
};

export default PaginationControls;
