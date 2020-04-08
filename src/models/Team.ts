import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  BelongsTo,
  HasOne,
} from "sequelize-typescript";
import Games from "./Games";

@Table
export default class SchoolsFBS extends Model<SchoolsFBS> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  school: string;

  @Column
  mascot: string;

  @Column
  abbreviation: string;

  @Column
  alt_name1: string;

  @Column
  alt_name2: string;

  @Column
  alt_name3: string;

  @Column
  conference: string;

  @Column
  division: string;

  @Column
  color: string;

  @Column
  alt_color: string;

  @Column
  logos_1: string;

  @Column
  logos_2: string;

  @HasMany(() => Games, "home_id")
  homeGames: Games[];

  @HasMany(() => Games, "away_id")
  awayGames: Games[];
}
