import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType
} from "sequelize-typescript";

@Table
export default class Talents extends Model<Talents> {
  @Column
  year: number;

  @Column
  school: string;

  @Column
  talent: number;
}
