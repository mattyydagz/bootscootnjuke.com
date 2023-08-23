export interface Database {
  public: {
    Tables: {
      owners: {
        Row: {
          active: boolean | null;
          bio: string | null;
          id: number | null;
          logoUrl: string | null;
          name: string | null;
          ownerId: string;
        };
      };
      stats: {
        Row: {
          id: number;
          loses: number | null;
          ownerId: string | null;
          ptsAgst: number | null;
          ptsFor: number | null;
          team: string | null;
          wins: number | null;
          year: number | null;
          finalPlace: number | null;
        };
      };
    };
  };
}

export interface Owners {
  owner: {
    id: number | null;
    ownerId: string | null;
    name: string | null;
    active: boolean | null;
    bio: string | null;
    logoUrl: string | null;
  }[];
}

export interface Leaderboards {
  champs: {
    name: string | null;
    ownerId: string | null;
    titlewins: number | null;
  }[];

  highest_week_totals: {
    year: number | null;
    week: number | null;
    team: string | null;
    points: number | null;
    owner: string | null;
    leaderboardId: string | null;
  }[];

  highest_player_totals: {
    year: number | null;
    week: number | null;
    team: string | null;
    player: string | null;
    points: number | null;
    owner: string | null;
    leaderboardId: string | null;
  }[];

  highest_seasonal_totals: {
    year: number | null;
    team: string | null;
    points: number | null;
    owner: string | null;
    leaderboardId: string | null;
  }[];
}
