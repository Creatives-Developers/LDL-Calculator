import React, { useState } from "react";
import Logo from "./components/Logo";
import PagesSlider from "./components/PagesSlider";

function Home() {
  const [[page, direction], setPage] = useState([1, 0]);
  const maxIndex = 3;

  const paginate = (newDirection) => {
    const newPageIndex =
      newDirection > 0 ? page + 1 : page > 0 ? page - 1 : maxIndex - 1;
    setPage([newPageIndex % maxIndex, newDirection]);
  };

  return (
    <section className="home-container">
      <article className="pages-container">
        <Logo />
        <PagesSlider {...{ page, direction, paginate }} />
      </article>
    </section>
  );
}

export default Home;
