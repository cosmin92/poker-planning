import { GameCreation } from '../model/GameCreation';
import { GameCreationInterface } from '../repository/GameCreationInterface';
import axios from 'axios';

interface Props {
    gameName?: string,
  }

async function createGame(game: GameCreation) {
    try {

        const token = sessionStorage.getItem("access-token")?.split('"')[1];

        const { data } = await axios.post<GameCreationInterface>(
            `${process.env.REACT_APP_CREATE_GAME}`,
            { gameName: game.gameName, playLink: game.playLink, playerId: game.adminId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    "Authorization" : `Bearer ${token}`,
                },
            },
        );

        
        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error: ', error.message);
            return error.message;
        } else {
            console.log('unexpected: ', error);
        }
    }
}

export default createGame;