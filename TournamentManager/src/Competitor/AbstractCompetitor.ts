import Player from '../Player/Player';
import ICompetitor from './ICompetitor';

abstract class AbstractCompetitor implements ICompetitor {
  readonly _seed: number;

  constructor(seed: number) {
    this._seed = seed;
  }

  getSeed(): number {
    return this._seed;
  }

  abstract getPlayers(): Player[];

  toString(): string {
    return this._seed.toString();
  }
}

export default AbstractCompetitor;
