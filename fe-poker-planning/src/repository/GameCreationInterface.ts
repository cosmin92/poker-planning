import { GameCreation } from "../model/GameCreation";

export interface GameCreationInterface {
    createGame(game: GameCreation): void;
}