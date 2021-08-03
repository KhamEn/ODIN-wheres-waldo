import { Enumify } from "enumify";

class GameStatus extends Enumify {
  static INACTIVE = new GameStatus();
  static ACTIVE = new GameStatus();
  static FINISHED = new GameStatus();
  static _ = this.closeEnum();
}

export default GameStatus;
