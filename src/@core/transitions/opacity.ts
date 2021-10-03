export const opacity = (from: number = 0, enter: number = 1, leave: number = 0): any => {
  return {
    from: {opacity: from},
    enter: {opacity: enter},
    leave: {opacity: leave}
  };
};