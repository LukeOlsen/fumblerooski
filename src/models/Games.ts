import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  ForeignKey,
  BelongsTo,
  BelongsToMany
} from "sequelize-typescript";
import SchoolsFBS from "./Team";

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

  @ForeignKey(() => SchoolsFBS)
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

  @ForeignKey(() => SchoolsFBS)
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

  @BelongsTo(() => SchoolsFBS, "home_id")
  homeTeam: SchoolsFBS[];

  @BelongsTo(() => SchoolsFBS, "away_id")
  awayTeam: SchoolsFBS[];
}
