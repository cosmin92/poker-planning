import { GameCreation } from '../model/GameCreation';
import { GameCreationInterface } from '../repository/GameCreationInterface';
import axios from 'axios';

export class GameCreationInterfaceImpl implements GameCreationInterface{

    createGame(game: GameCreation): void {
       alert(game.gameName);
    }
}