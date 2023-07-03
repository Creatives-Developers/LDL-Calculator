export const scaleIn = (duration = 0, once = true) => {
  return {
    initial: {
      scale: 0,
    },
    viewport: { once },
    whileInView: { scale: 1, transition: { duration } },
  };
};
