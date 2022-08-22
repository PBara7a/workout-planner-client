import { useState } from "react";
import quotes from "../utils/quotes";

const Header = () => {
  const randIndex = Math.floor(Math.random() * quotes.length);
  const [quote, setQuote] = useState(quotes[randIndex]);

  return (
    <header>
      <blockquote>
        <span className="quote">&ldquo;{quote.q}&rdquo;</span>
        <br />
        <strong> &mdash; {quote.a}</strong>
      </blockquote>
    </header>
  );
};

export default Header;
