import { Player } from "../model/Player";

export default interface PlayerInterface{
    getAllPlayers(gameId: number): Player[];
}