/**
 * Randomize player colors
 * @return {Array} colors - either ['w', 'b'] or ['b', 'w']
 */
export default () => {
  const colors = ['w', 'b'];
  if (Math.random() > 0.5) {
    return colors.reverse();
  }
  return colors;
};
