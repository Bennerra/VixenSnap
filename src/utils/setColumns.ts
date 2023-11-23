export const setColumns = (width: number) => {
  let columns;
  if (width <= 576) {
    columns = 2;
  } else if (width <= 1200) {
    columns = 4;
  } else {
    columns = 5;
  }
  return columns;
};
