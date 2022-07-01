import axios from "axios";
import { PlayerCreation } from "../model/PlayerCreation";
import { LoginInterface } from "../repository/LoginInterface";

export class LoginInterfaceImpl implements LoginInterface{

    login(player: PlayerCreation): void {
        const url = `${process.env.REACT_APP_LOGIN}`;
        try{
            axios.post(url,  {} ,{ params: { username: player.username, password: player.password}})
            .then((response) => {
                sessionStorage.setItem("access-token", JSON.stringify(response.data.access));
                sessionStorage.setItem("userId", JSON.stringify(response.data.userId));
                return response;
            });
        }catch (e){
            console.log(e);
        }
    }
}