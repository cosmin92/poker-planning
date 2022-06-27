import { Player } from "./Player";

export type Game = {
    id: number;
    gameName: string;
    players: Player[];
}