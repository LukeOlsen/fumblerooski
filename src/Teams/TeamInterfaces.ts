export interface ppaQueryResults {
  conference: string;
  week: number;
  opponent: string;
  offense_firstDown: number;
  offense_overall: number;
  offense_passing: number;
  offense_rushing: number;
  offense_secondDown: number;
  offense_thirdDown: number;
  defense_firstDown: number;
  defense_overall: number;
  defense_passing: number;
  defense_rushing: number;
  defense_secondDown: number;
  defense_thirdDown: number;
}

export interface ppaApi {
  id: string;
  color: string;
  data: Array<ppaLineChartData>;
}

export interface ppaLineChartData {
  id: string;
  Offense: number;
  Defense: number;
}
