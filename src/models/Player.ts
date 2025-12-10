export interface Player {
  id: string;
  name: string;
  scores: Score[];
}

export interface Score {
  playerId: string;
  category: string;
  points: number;
  scratched: boolean;
}
