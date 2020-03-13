import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType
} from "sequelize-typescript";

export default class RecruitTeamTalent extends Model<RecruitTeamTalent> {
  @Column
  year: number;

  @Column
  rank: number;

  @Column
  team: string;

  @Column
  points: number;
}
