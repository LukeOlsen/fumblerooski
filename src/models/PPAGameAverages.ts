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

  @Column(DataType.FLOAT)
  offense_overall: any;

  @Column(DataType.FLOAT)
  offense_passing: any;

  @Column(DataType.FLOAT)
  offense_rushing: any;

  @Column(DataType.FLOAT)
  offense_firstDown: any;

  @Column(DataType.FLOAT)
  offense_secondDown: any;

  @Column(DataType.FLOAT)
  offense_thirdDown: any;

  @Column(DataType.FLOAT)
  defense_overall: any;

  @Column(DataType.FLOAT)
  defense_passing: any;

  @Column(DataType.FLOAT)
  defense_rushing: any;

  @Column(DataType.FLOAT)
  defense_firstDown: any;

  @Column(DataType.FLOAT)
  defense_secondDown: any;

  @Column(DataType.FLOAT)
  defense_thirdDown: any;

  @BelongsTo(() => Games, "id")
  games: Games;

  @BelongsTo(() => SchoolsFBS, "team_id")
  SchoolsFBS: SchoolsFBS;
}
