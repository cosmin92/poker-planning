import { Player } from "../model/Player";
import PlayerInterface from "../repository/PlayerInterface";

const playerTest: Player = { id: 1, username: "adrian", role: "admin", vote: 0, gameId: 1 };
const playerTest2: Player = { id: 2, username: "test", role: "user", vote: 0, gameId: 1 };
const playerTest3: Player = { id: 3, username: "prova", role: "user", vote: 0, gameId: 1 };
const playersTest: Player[] = [];
playersTest.push(playerTest, playerTest2, playerTest3);

export default class PlayerInterfaceImpl implements PlayerInterface{
    getAllPlayers(gameId: number): Player[] {
        const url = `${process.env.REACT_APP_GET_PLAYERS}`;
        return playersTest;
    }
    
}