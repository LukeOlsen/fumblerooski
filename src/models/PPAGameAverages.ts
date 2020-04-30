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
import Games from "./Games";

@Table
export default class PPAGameAverages extends Model<PPAGameAverages> {
  @PrimaryKey
  @ForeignKey(() => Games)
  @Column
  gameId: number;

  @Column
  season: number;

  @Column
  week: number;

  @Column
  conference: string;

  @Column
  team: string;

  @Column
  opponent: string;

  @Column
  offense_overall: number;

  @Column
  offense_passing: number;

  @Column
  offence_rushing: number;

  @Column
  offense_firstDown: number;

  @Column
  offense_secondDown: number;

  @Column
  offsense_thirdDown: number;

  @Column
  defense_overall: number;

  @Column
  defense_passing: number;

  @Column
  defense_rushing: number;

  @Column
  defense_firstDown: number;

  @Column
  defense_secondDown: number;

  @Column
  defense_thirdDown: number;

  @BelongsTo(() => Games, "id")
  games: Games;
}
