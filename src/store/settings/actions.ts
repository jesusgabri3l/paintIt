const incrementLineWidth = () => ({
  type: 'INCREMENT_LINEWIDTH',
});

const decrementLineWidth = () => ({
  type: 'DECREMENT_LINEWIDTH',
});

const changeColor = (color: string) => ({
  type: 'CHANGE_COLOR',
  color,
});

export { changeColor, decrementLineWidth, incrementLineWidth };
