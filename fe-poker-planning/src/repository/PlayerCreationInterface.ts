import { PlayerCreation } from "../model/PlayerCreation";

export interface PlayerCreationInterface {
    createPlayer(player: PlayerCreation): void;
}