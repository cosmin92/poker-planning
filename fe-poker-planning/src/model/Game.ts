import { Player } from "./Player";

export type Game = {
    id: number;
    gameName?: string;
    playLink: string;
    adminId: number;
    players: Player[];
}