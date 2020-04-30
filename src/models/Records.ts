import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import SchoolsFBS from "./Team";

@Table
export default class Records extends Model<Records> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  year: number;

  @Column
  team: string;

  @ForeignKey(() => SchoolsFBS)
  @Column
  team_id: number;

  @Column
  conference: string;

  @Column
  division: string;

  @Column
  total_games: number;

  @Column
  total_wins: number;

  @Column
  total_losses: number;

  @Column
  total_ties: number;

  @Column
  conferenceGames_games: number;

  @Column
  conferenceGames_wins: number;

  @Column
  conferenceGames_losses: number;

  @Column
  conferenceGames_ties: number;

  @Column
  homeGames_games: number;

  @Column
  homeGames_wins: number;

  @Column
  homeGames_losses: number;

  @Column
  homeGames_ties: number;

  @Column
  awayGames_games: number;

  @Column
  awayGames_wins: number;

  @Column
  awayGames_losses: number;

  @Column
  awayGames_ties: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;

  @BelongsTo(() => SchoolsFBS, "team_id")
  teamRecord: SchoolsFBS[];
}
