import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany
} from "sequelize-typescript";
import Games from "./Games";

@Table
export default class GameStats extends Model<GameStats> {
  @PrimaryKey
  @ForeignKey(() => Games)
  @Column
  id: number;

  @Column
  homeTeamSchool: string;

  @Column
  homeTeamConference: string;

  @Column
  homeTeamHomeAway: string;

  @Column
  homeTeamPoints: number;

  @Column(DataType.JSON)
  homeTeamStats: any;

  @Column
  awayTeamSchool: string;

  @Column
  awayTeamConference: string;

  @Column
  awayTeamHomeAway: string;

  @Column
  awayTeamPoints: number;

  @Column(DataType.JSON)
  awayTeamStats: any;

  @BelongsTo(() => Games, "id")
  games: Games;
}
