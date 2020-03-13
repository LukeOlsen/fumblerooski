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
  @PrimaryKey
  @Column
  id: number;

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
  committedTo: string;

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
  stateProvince: string;

  @Column
  country: string;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
