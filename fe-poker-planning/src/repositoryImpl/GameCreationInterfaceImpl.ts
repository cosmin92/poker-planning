import { GameCreation } from '../model/GameCreation';
import { GameCreationInterface } from '../repository/GameCreationInterface';
import axios from 'axios';

interface Props {
    gameName?: string,
  }

async function createGame(game: GameCreation) {
    try {
        const { data } = await axios.post<GameCreationInterface>(
            'http://localhost:8080/api/gameCreation',
            { gameName: game.gameName, playLink: game.playLink, adminId: game.adminId },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json'
                },
            },
        );

        console.log(JSON.stringify(data));
        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error: ', error.message);
            return error.message;
        } else {
            console.log('unexpected: ', error)
        }
    }
}

export default createGame;