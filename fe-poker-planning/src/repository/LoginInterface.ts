import { PlayerCreation } from "../model/PlayerCreation";

export interface LoginInterface {
    login(player: PlayerCreation): void;
}