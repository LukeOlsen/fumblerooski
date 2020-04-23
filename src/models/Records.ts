import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType
} from "sequelize-typescript";

@Table
export default class Records extends Model<Records> {
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
  divison: number;

  @Column
  total_games: number;

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
}
