import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType
} from "sequelize-typescript";

@Table
export default class Recruits extends Model<Recruits> {
  @Column
  recruitType: string;

  @Column
  year: number;

  @Column
  ranking: number;

  @Column
  name: string;

  @Column
  school: string;

  @Column
  comittedTo: string;

  @Column
  position: string;

  @Column
  height: number;

  @Column
  weight: number;

  @Column
  stars: number;

  @Column
  rating: number;

  @Column
  city: string;

  @Column
  stateProvidence: string;

  @Column
  country: string;
}
