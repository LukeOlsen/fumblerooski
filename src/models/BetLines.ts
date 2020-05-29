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

@Table
export default class BetLines extends Model<BetLines> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  @ForeignKey(() => SchoolsFBS)
  home_id: number;

  @Column
  homeTeam: string;

  @Column
  homeScore: number;

  @Column
  @ForeignKey(() => SchoolsFBS)
  away_id: number;

  @Column
  awayTeam: string;

  @Column
  awayScore: number;

  @Column(DataType.JSON)
  lines: any;

  @Column
  betLine_main: string;

  @Column
  betLine_main_spread: number;

  @Column
  betLine_main_formattedSpread: string;

  @Column
  betLine_main_overUnder: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @BelongsTo(() => SchoolsFBS, "home_id")
  home: SchoolsFBS[];

  @BelongsTo(() => SchoolsFBS, "away_id")
  away: SchoolsFBS[];
}
