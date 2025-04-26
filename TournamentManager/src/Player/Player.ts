class Player {
  readonly _name: string;
  readonly _club: string;

  constructor(name: string, club: string) {
    this._name = name;
    this._club = club;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    throw new Error('Attempting to change a readonly property');
  }

  public get club(): string {
    return this._club;
  }

  public set club(club: string) {
    throw new Error('Attempting to change a readonly property');
  }

  public toString() {
    return `${this._name},${this._club}`;
  }
}

export default Player;
