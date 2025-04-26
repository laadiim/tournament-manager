import ICompetitor from '../Competitor/ICompetitor';

abstract class AbstractStage {
  private readonly _competitors: ICompetitor[];
  private config: Map<string, number> = new Map();
  private configRanges: Map<string, number[]> = new Map();

  constructor() {
    this._competitors = [];
    this.createDefaultConfig();
  }

  abstract createDefaultConfig(): void;

  abstract addCompetitor(toAdd: ICompetitor): void;

  abstract evaluate(): ICompetitor[];

  public changeConfig(field: string, value: number) {
    if (!this.config.has(field)) {
      throw new Error('property-unknown-error');
    }

    if (!(value in this.configRanges.get(field))) {
      throw new Error('invalid-value-error');
    }

    this.config.set(field, value);
  }
}
