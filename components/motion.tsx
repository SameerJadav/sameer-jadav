export const icon = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.5, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay: 0.5, duration: 0.01 },
      },
    };
  },
};
