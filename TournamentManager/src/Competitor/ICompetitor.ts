import Player from '../Player/Player';

interface ICompetitor {
  toString(): string;
  getPlayers(): Player[];
  getSeed(): number;
}

export default ICompetitor;
