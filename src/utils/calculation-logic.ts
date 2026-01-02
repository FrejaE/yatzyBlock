import type { Score } from "../models/Player";

export const calculation = (
  playerId: string,
  scores: Score[],
  categories: string[]
) => {
  let total = 0;
  scores.forEach((score) => {
    const exists = categories?.find((cat) => cat === score.category);
    if (exists && playerId === score.playerId) {
      total += score.points;
    }
  });

  return total;
};

export const calcBonus = (total: number) => {
  if (total >= 75) {
    return 50;
  } else {
    return 0;
  }
};
// todo : läff till total logik här
export const calcTotal = () => {};
