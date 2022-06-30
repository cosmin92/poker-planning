import CardPickerInterface from "../repository/CardPickerInterface";
import axios from 'axios';

export default class CardPickerInterfaceImpl implements CardPickerInterface{
    pickedCard(currentPlayerId: number, currentCardId: number): void {
        let idGame: number = 1;
        const url = `${process.env.REACT_APP_ADD_VOTATION_API}`;
        axios.post(url, {} ,{params: {idGame: idGame, idPlayer: currentPlayerId, vote: currentCardId}}).
            then( (response) =>{
                console.log(response.data);
            });
    }
}