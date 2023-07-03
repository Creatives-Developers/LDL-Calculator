import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import { variants } from "../animations";
import SliderItem from "../Hocs/SliderItem";
import { AnimatePresence } from "framer-motion";

export default function PagesSlider({ page, direction, paginate }) {
  return (
    <section className="pages-slider">
      <AnimatePresence initial={false}>
        {page === 0 && (
          <SliderItem
            {...{
              page,
              direction,
              variants,
            }}
          >
            <PageOne paginate={paginate} />
          </SliderItem>
        )}
        {page === 1 && (
          <SliderItem
            {...{
              page,
              direction,
              variants,
              paginate,
            }}
          >
            <PageTwo paginate={paginate} />
          </SliderItem>
        )}
        {page === 2 && (
          <SliderItem
            {...{
              page,
              direction,
              variants,
              paginate,
            }}
          >
            <PageThree paginate={paginate} />
          </SliderItem>
        )}
      </AnimatePresence>
    </section>
  );
}
