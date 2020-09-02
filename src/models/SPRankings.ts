import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  BelongsToMany,
} from "sequelize-typescript";
import SchoolsFBS from "./Team";

@Table
export class SPRankings extends Model<SPRankings> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  year: number;

  @Column
  team: string;

  @Column
  conference: string;

  @Column
  rating: number;

  @Column
  secondOrderWins: number;

  @Column
  SOS: number;

  @Column
  offenseRating: number;

  @Column
  offenseSuccess: number;

  @Column
  offenseExplosiveness: number;

  @Column
  offenseRushing: number;

  @Column
  offensePassing: number;

  @Column
  offenseStandardDowns: number;

  @Column
  offensePassingDowns: number;

  @Column
  offenseRunRate: number;

  @Column
  offensePace: number;

  @Column
  defenseRating: number;

  @Column
  defenseSuccess: number;

  @Column
  defenseExplosiveness: number;

  @Column
  defenseRushing: number;

  @Column
  defensePassing: number;

  @Column
  defenseStandardDowns: number;

  @Column
  defensePassingDowns: number;

  @Column
  defenseHavocTotal: number;

  @Column
  defenseHavocFrontSeven: number;

  @Column
  defenseHavocDb: number;

  @Column
  specialTeamsRating: number;

  @ForeignKey(() => SchoolsFBS)
  @Column
  team_id: number;
}
