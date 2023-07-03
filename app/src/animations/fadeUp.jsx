export const fadeInUp = (duration = 0, once = true) => {
  return {
    initial: {
      y: -100,
    },
    viewport: { once },
    whileInView: { y: 0, transition: { duration } },
  };
};
