import mongoose from 'mongoose';

const { ObjectId } = mongoose.Schema.Types;

const ChessSchema = new mongoose.Schema({
  playerOneID: ObjectId,
  playerTwoID: ObjectId,
  playerOneColor: String,
  playerTwoColor: String,
  startDate: Date,
  endDate: Date,
  fen: String,
  pgn: String,
  gameOver: Boolean,
  started: Boolean,
  victoryType: String
});

// eslint-disable-next-line new-cap
const Chess = new mongoose.model('Chess', ChessSchema);

export default Chess;
