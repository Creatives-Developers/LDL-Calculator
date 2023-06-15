import React from "react";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import { variants } from "../animations/slider";
import SliderItem from "../Hocs/SliderItem";
import { AnimatePresence } from "framer-motion";

export default function PagesSlider({ page, direction }) {
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
            <PageOne />
          </SliderItem>
        )}
        {page === 1 && (
          <SliderItem
            {...{
              page,
              direction,
              variants,
            }}
          >
            <PageTwo />
          </SliderItem>
        )}
        {page === 2 && (
          <SliderItem
            {...{
              page,
              direction,
              variants,
            }}
          >
            <PageThree />
          </SliderItem>
        )}
      </AnimatePresence>
    </section>
  );
}
