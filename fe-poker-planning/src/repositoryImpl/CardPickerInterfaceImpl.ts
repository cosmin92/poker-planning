import CardPickerInterface from "../repository/CardPickerInterface";

export default class CardPickerInterfaceImpl implements CardPickerInterface{
    pickedCard(currentPlayerId: number, currentCardId: number): void {
        alert( currentPlayerId + " " + currentCardId);
    }
}