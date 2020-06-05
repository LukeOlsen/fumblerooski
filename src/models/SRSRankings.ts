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
export class SRSRankings extends Model<SRSRankings> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  year: number;

  @ForeignKey(() => SchoolsFBS)
  @Column
  team_id: number;

  @Column
  team: string;

  @Column
  conference: string;

  @Column
  division: string;

  @Column(DataType.FLOAT)
  rating: any;
}
