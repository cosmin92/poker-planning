import axios from 'axios';
import GameSettingsInterface from "../repository/GameSettingsInterface";

export default class GameSettingsInterfaceImpl implements GameSettingsInterface{
    setGameSettings(owner: string, name: string): void{
        const url = `${process.env.REACT_APP_ADD_VOTATION_API}`;
        console.log("I parametri sono: " + owner + " " + name);
        axios.post(url, {} ,{params: {owner: owner, name: name}}).
            then( (response) =>{
                console.log(response);
             });
    }
}