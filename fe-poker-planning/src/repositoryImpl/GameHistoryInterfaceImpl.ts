import axios from 'axios';
import GameHistoryInterface from '../repository/GameHistoryInterface';
import { History } from "../model/History";

export default class GameHistoryInterfaceImpl implements GameHistoryInterface{
    getVotingHistory(gameId: number): History[]{
        const test : History = {name:"test", average:5, mostVotedCard:2, result:1, time:new Date, totalPlayersVoted:10};
        
        return new Array(test, test, test);
    }
    
    setGameSettings(owner: string, name: string): void{
        const url = `${process.env.REACT_APP_ADD_VOTATION_API}`;
        console.log("I parametri sono: " + owner + " " + name);
        axios.post(url, {} ,{params: {owner: owner, name: name}}).
            then( (response) =>{
                console.log(response);
             });
    }
}