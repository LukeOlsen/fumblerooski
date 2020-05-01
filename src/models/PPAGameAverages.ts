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
import SchoolsFBS from "./Team";
import { Col } from "sequelize/types/lib/utils";

@Table
export default class PPAGameAverages extends Model<PPAGameAverages> {
  @PrimaryKey
  @Column
  id: number;

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

  @ForeignKey(() => SchoolsFBS)
  @Column
  team_id: number;

  @Column
  opponent: string;

  @Column
  offense_overall: number;

  @Column
  offense_passing: number;

  @Column
  offense_rushing: number;

  @Column
  offense_firstDown: number;

  @Column
  offense_secondDown: number;

  @Column
  offense_thirdDown: number;

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

  @BelongsTo(() => SchoolsFBS, "team_id")
  SchoolsFBS: SchoolsFBS;
}
