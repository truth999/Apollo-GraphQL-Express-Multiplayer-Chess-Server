import { PubSub } from 'apollo-server';

import * as CHESS_GAME_EVENTS from './chess-game';

export const EVENTS = {
  CHESS_GAME: CHESS_GAME_EVENTS
};

export default new PubSub();
