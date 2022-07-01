import axios from "axios";
import { PlayerCreation } from "../model/PlayerCreation";
import { LoginInterface } from "../repository/LoginInterface";

export class LoginInterfaceImpl implements LoginInterface{

    login(player: PlayerCreation): void {
        const url = `${process.env.REACT_APP_LOGIN}`;
        try{
            axios.post(url, player)
            .then((response) => {
                return response;
            });
        }catch (e){
            console.log(e);
        }
    }
}