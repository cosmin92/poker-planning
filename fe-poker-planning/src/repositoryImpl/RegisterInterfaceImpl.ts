import axios from "axios";
import { RegistrationInterface } from "../repository/RegistrationInterface";

export class RegistrationInterfaceImpl implements RegistrationInterface{

    registration(player: {username: string; password: string}): void {
        const url = `${process.env.REACT_APP_REGISTRATION}`;
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