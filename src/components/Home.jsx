import { useState } from "react";
import quotes from "../utils/quotes";

const Home = () => {
  const randIndex = Math.floor(Math.random() * quotes.length);
  const [quote] = useState(quotes[randIndex]);

  return (
    <blockquote>
      <span className="quote">&ldquo;{quote.q}&rdquo;</span>
      <br />
      <strong> &mdash; {quote.a}</strong>
    </blockquote>
  );
};

export default Home;
