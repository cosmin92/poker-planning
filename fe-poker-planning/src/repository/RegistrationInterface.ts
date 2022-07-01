import { PlayerCreation } from "../model/PlayerCreation";

export interface RegistrationInterface {
    registration(player: PlayerCreation): void;
}