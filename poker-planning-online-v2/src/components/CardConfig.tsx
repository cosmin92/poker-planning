import { Game } from "../types/Game";

export interface CardConfig {
  value: number;
  displayValue: string;
}

export const fibonacciCards: CardConfig[] = [
  { value: 0, displayValue: "0" },
  { value: 1, displayValue: "1" },
  { value: 2, displayValue: "2" },
  { value: 3, displayValue: "3" },
  { value: 5, displayValue: "5" },
  { value: 8, displayValue: "8" },
  { value: 13, displayValue: "13" },
  { value: 21, displayValue: "21" },
  { value: 34, displayValue: "34" },
  { value: 55, displayValue: "55" },
  { value: 89, displayValue: "89" },
];

export const getCards = (
  gameType: Game["gameType"] | undefined
): CardConfig[] => {
  return fibonacciCards;
};
