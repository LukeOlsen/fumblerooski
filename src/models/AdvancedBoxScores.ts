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
export default class AdvancedBoxedScores extends Model<AdvancedBoxedScores> {
  @PrimaryKey
  @ForeignKey(() => Games)
  @Column
  id: number;

  @Column(DataType.JSON)
  ppa: any;

  @Column(DataType.JSON)
  successRates: any;

  @Column(DataType.JSON)
  explosiveness: any;

  @Column(DataType.JSON)
  rushing: any;

  @Column(DataType.JSON)
  havoc: any;

  @Column(DataType.JSON)
  scoringOpportunities: any;

  @Column(DataType.JSON)
  fieldPosition: any;

  @BelongsTo(() => Games, "id")
  games: Games;
}
