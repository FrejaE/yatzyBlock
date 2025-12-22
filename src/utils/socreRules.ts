export const CATEGORY_RULES: Record<string, { min: number; max: number }> = {
  // övre
  Ettor: { min: 0, max: 6 },
  Tvåor: { min: 0, max: 12 },
  Treor: { min: 0, max: 18 },
  Fyror: { min: 0, max: 24 },
  Femmor: { min: 0, max: 30 },
  Sexor: { min: 0, max: 36 },

  // nedre
  "Ett par": { min: 0, max: 12 },
  "Två par": { min: 0, max: 22 },
  "Tre par": { min: 0, max: 30 },
  Triss: { min: 0, max: 18 },
  Fyrtal: { min: 0, max: 24 },
  Femtal: { min: 0, max: 30 },
  "Liten stege": { min: 0, max: 15 },
  "Stor stege": { min: 0, max: 20 },
  "Full stege": { min: 0, max: 21 },
  Kåk: { min: 0, max: 28 },
  Hus: { min: 0, max: 33 },
  Torn: { min: 0, max: 34 },
  Chans: { min: 0, max: 36 },
  Yatzy: { min: 0, max: 100 },
};

export const validateScore = (category: string, value: number): boolean => {
  const rule = CATEGORY_RULES[category];
  if (!rule) return true;

  return value >= rule.min && value <= rule.max;
};
