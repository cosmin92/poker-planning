import { ulid } from "ulid";
import { addPlayerToGameInStore, getGameFromStore, getPlayersFromStore, getPlayerFromStore, updatePlayerInStore } from "../repository/firebase";
import { getPlayerGamesFromCache, isGameInPlayerCache, updatePlayerGamesInCache } from "../repository/local";
import { Player } from "../types/Player";
import { PlayerGame } from "../types/PlayerGame";
import { Status } from "../types/Status";
import { updateGameStatus } from "./Games";


export const updatePlayerGames = (gameId: string, playerId: string) => {
    let playerGames: PlayerGame[] = getPlayerGamesFromCache();
    playerGames.push({ gameId, playerId });
    updatePlayerGamesInCache(playerGames);
};

export const addPlayer = async (gameId: string, player: Player) => {
    const game = await getGameFromStore(gameId);
    if (game) {
        addPlayerToGameInStore(gameId, player);
    }
};

export const updatePlayerValue = async (gameId: string, playerId: string, value: number) => {
    const player = await getPlayerFromStore(gameId, playerId);

    if (player) {
        const updatedPlayer = {
            ...player,
            value: value,
            status: Status.Finished,
        };
        await updatePlayerInStore(gameId, updatedPlayer);
        await updateGameStatus(gameId);
        return true;
    }
    return false;
};

export const getCurrentPlayerId = (gameId: string): string | undefined => {
    let playerGames: PlayerGame[] = getPlayerGamesFromCache();

    const game = playerGames.find((playerGame) => playerGame.gameId === gameId);

    return game && game.playerId;
};

export const isCurrentPlayerInGame = (gameId: string): boolean => {
    return isGameInPlayerCache(gameId);
};

export const addPlayerToGame = async (gameId: string, playerName: string): Promise<boolean> => {
    const joiningGame = await getGameFromStore(gameId);

    if (!joiningGame) {
        console.log('Game not found');
        return false;
    }
    const newPlayer = { name: playerName, id: ulid(), status: Status.NotStarted };

    updatePlayerGames(gameId, newPlayer.id);
    await addPlayerToGameInStore(gameId, newPlayer);

    return true;
};

export const resetGame = async (gameId: string) => {
    const players = await getPlayersFromStore(gameId);

    players.forEach(async (player) => {
        const updatedPlayer: Player = {
            ...player,
            status: Status.NotStarted,
            value: 0,
        };

<<<<<<< HEAD
        await updatePlayerInStore(gameId, updatedPlayer);
    })

    // if (gameId) {
    //     const updatedPlayers = {
    //         ...players,
    //         value: 0,
    //         status: Status.NotStarted,
    //     };

    //     updatePlayerInStore(gameId,  );
    //     await updateGameStatus(gameId);
    //     return true;
    // }
    // return false;
=======
        updatePlayerInStore(gameId, ...players);
        await updateGameStatus(gameId);
        return true;
    }
    return false;
>>>>>>> 0a5d76ecb7c0335cc350bae4bc22d57ea417dce0

};