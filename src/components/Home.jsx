import { useState } from "react";
import quotes from "../utils/quotes";
import { Grid, Typography } from "@mui/material";

const Home = () => {
  const randIndex = Math.floor(Math.random() * quotes.length);
  const [quote] = useState(quotes[randIndex]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "95vh" }}
      id="home"
    >
      <Grid item>
        <blockquote>
          <Typography align="center" sx={{ fontSize: "1.5rem" }}>
            <span className="quote">&ldquo;{quote.q}&rdquo;</span>
          </Typography>
          <Typography align="right" sx={{ mr: 10 }}>
            <strong> &mdash; {quote.a}</strong>
          </Typography>
        </blockquote>
      </Grid>
    </Grid>
  );
};

export default Home;
