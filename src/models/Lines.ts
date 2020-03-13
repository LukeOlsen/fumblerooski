import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType
} from "sequelize-typescript";
import { Json } from "sequelize/types/lib/utils";

@Table
export default class Lines extends Model<Lines> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  homeTeam: string;

  @Column
  homeScore: number;

  @Column
  awayTeam: string;

  @Column
  awayScore: number;

  @Column(DataType.JSON)
  lines: any;
}
