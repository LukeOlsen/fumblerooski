import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import SchoolsFBS from "./Team";
import Games from "./Games";

@Table
export default class BetLines extends Model<BetLines> {
  @PrimaryKey
  @ForeignKey(() => Games)
  @Column
  id: number;

  @ForeignKey(() => SchoolsFBS)
  @Column
  home_id: number;

  @Column
  homeTeam: string;

  @Column
  homeScore: number;

  @ForeignKey(() => SchoolsFBS)
  @Column
  away_id: number;

  @Column
  awayTeam: string;

  @Column
  awayScore: number;

  @Column(DataType.JSON)
  lines: any;

  @Column
  betLine_provider: string;

  @Column(DataType.FLOAT)
  betLine_spread: any;

  @Column
  betLine_formattedSpread: string;

  @Column
  betLine_overUnder: string;

  @BelongsTo(() => SchoolsFBS, "home_id")
  homeBet: SchoolsFBS[];

  @BelongsTo(() => SchoolsFBS, "away_id")
  awayBet: SchoolsFBS[];

  @BelongsTo(() => Games)
  games: Games;
}
