import Player from '../Player/Player';
import AbstractCompetitor from './AbstractCompetitor';

class SinglesCompetitor extends AbstractCompetitor {
  _player: Player;

  constructor(seed: number, player: Player) {
    super(seed);
    this._player = player;
  }

  getPlayers(): Player[] {
    return [this._player];
  }

  toString(): string {
    return `${super.toString()},${this._player.toString()}`;
  }
}

export default SinglesCompetitor;
