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
import Games from "./Games";

@Table
export default class GameDrives extends Model<GameDrives> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  offense: string;

  @Column
  offense_conference: string;

  @Column
  defense: string;

  @Column
  defense_conference: string;

  @Column
  @ForeignKey(() => Games)
  game_id: number;

  @Column
  scoring: number;

  @Column
  start_period: number;

  @Column
  start_yardline: number;

  @Column
  start_yards_to_goal: number;

  @Column
  start_time_minutes: number;

  @Column
  start_time_seconds: number;

  @Column
  end_period: number;

  @Column
  end_yardline: number;

  @Column
  end_yards_to_goal: number;

  @Column
  end_time_minutes: number;

  @Column
  end_time_seconds: number;

  @Column
  elapsed_minutes: number;

  @Column
  elapsed_seconds: number;

  @Column
  plays: number;

  @Column
  drive_result: string;

  @BelongsTo(() => Games, "id")
  games: Games;
}
