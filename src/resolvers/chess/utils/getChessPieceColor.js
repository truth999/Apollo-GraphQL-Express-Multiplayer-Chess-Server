/**
 * Returns chess piece color
 * @param {String} piece
 * @return {String} color - 'b' or 'w'
 */
export default piece => {
  return piece.charCodeAt(0) >= 97 ? 'b' : 'w';
};
