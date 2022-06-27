import { PlayerCreation } from "../model/PlayerCreation";
import { PlayerCreationInterface } from "../repository/PlayerCreationInterface";

export class PlayerCreationInterfaceImpl implements PlayerCreationInterface{

    createPlayer(player: PlayerCreation): void {
       alert(player.password);
    }
}