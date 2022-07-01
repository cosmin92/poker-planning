import axios from "axios";
import { PlayerCreation } from "../model/PlayerCreation";
import { RegistrationInterface } from "../repository/RegistrationInterface";

export class RegistrationInterfaceImpl implements RegistrationInterface{

    registration(player: PlayerCreation): void {
        const url = `${process.env.REACT_APP_REGISTRATION}`;
        try{
            JSON.stringify(player)
            axios.post(url,{} ,{ params: { username: player.username, password: player.password, ruolo: "USER"}})
            .then((response) => {
                return response;
            });
        }catch (e){
            console.log(e);
        }
    }
}