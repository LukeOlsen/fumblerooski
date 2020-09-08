import {
  Table,
  Column,
  Model,
  HasMany,
  PrimaryKey,
  DataType,
  BelongsTo,
  HasOne,
  ForeignKey,
} from "sequelize-typescript";
import Games from "./Games";
import Records from "./Records";
import Recruits from "./Recruits";
import PPAGameAverages from "./PPAGameAverages";
import BetLines from "./BetLines";
import { SRSRankings } from "./SRSRankings";
import { SPRankings } from "./SPRankings";

@Table
export default class SchoolsFBS extends Model<SchoolsFBS> {
  @PrimaryKey
  @Column
  id: number;

  @Column
  school: string;

  @Column
  mascot: string;

  @Column
  abbreviation: string;

  @Column
  alt_name1: string;

  @Column
  alt_name2: string;

  @Column
  alt_name3: string;

  @Column
  conference: string;

  @Column
  division: string;

  @Column
  color: string;

  @Column
  alt_color: string;

  @Column
  logos_1: string;

  @Column
  logos_2: string;

  @HasMany(() => Games, "home_id")
  homeGames: Games[];

  @HasMany(() => Games, "away_id")
  awayGames: Games[];

  @HasMany(() => Records, "team_id")
  teamRecord: Records[];

  @HasMany(() => PPAGameAverages, "team_id")
  ppaGameAverages: PPAGameAverages[];

  @HasMany(() => Recruits, "team_id")
  recruits: Recruits[];

  @HasMany(() => BetLines, "home_id")
  homeBet: BetLines[];

  @HasMany(() => BetLines, "away_id")
  awayBet: BetLines[];

  @HasMany(() => SRSRankings, "away_id")
  srs: SRSRankings[];

  @HasMany(() => SPRankings, "team_id")
  spRank: SRSRankings[];
}
