import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType
} from "sequelize-typescript";

@Table
export default class Games extends Model<Games> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  season: number;

  @Column
  week: number;

  @Column
  season_type: string;

  @Column
  start_date: string;

  @Column
  start_time_tbd: string;

  @Column
  neutral_site: number;

  @Column
  conference_game: number;

  @Column
  attendance: string;

  @Column
  venue_id: string;

  @Column
  venue: string;

  @Column
  home_id: number;

  @Column
  home_team: string;

  @Column
  home_conference: string;

  @Column
  home_points: number;

  @Column(DataType.JSON)
  home_line_scores: any;

  @Column
  home_post_win_prob: number;

  @Column
  away_id: number;

  @Column
  away_team: string;

  @Column
  away_conference: string;

  @Column
  away_points: number;

  @Column(DataType.JSON)
  away_line_scores: any;

  @Column
  away_post_win_prob: number;

  @Column
  excitement_index: number;
}
