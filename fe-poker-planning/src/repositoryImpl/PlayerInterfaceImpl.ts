import axios from "axios";
import { Player } from "../model/Player";
import PlayerInterface from "../repository/PlayerInterface";

let players: Player[] = [];

export default class PlayerInterfaceImpl implements PlayerInterface {
    getAllPlayers(gameId: number): Player[] {
        const url = `${process.env.REACT_APP_GET_PLAYERS}`;
        try{
        axios.post(url, {} ,{ params: { idGame: gameId } }).
            then((response) => {
                players = response.data;
                JSON.stringify(players);
            });
        }catch (e){
            console.log("error", e)
        }
        return players;
    }

}