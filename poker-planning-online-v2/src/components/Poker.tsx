//import { onSnapshot, doc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { Game } from "../types/Game";
import { Player } from "../types/Player";
//import {db, gameCollectionName, playersCollectionName} from '../firebase';
import { getCurrentPlayerId } from "../service/Players";
import { Typography } from '@material-ui/core';
import GameArea from "./GameArea";
import { streamGame, streamPlayers } from "../service/Games";
import React from "react";

export const Poker = () => {
    let {id} = useParams<{id: string}>();
    const history = useHistory();
    const [game, setGame] = useState<Game | undefined>();
    const [players, setPlayers] = useState<Player[] | undefined>();
    const [currentPlayerId, setCurrentPlayerId] = useState<string | undefined>();

    useEffect(() =>{
        async function fetchData(id: string) {
          streamGame(id).onSnapshot((snapshot) => {
            if (snapshot.exists) {
              const data = snapshot.data();
              if (data) {
                setGame(data as Game);
                return;
              }
            }
          });
          streamPlayers(id).onSnapshot((snapshot) => {
            const players: Player[] = [];
            snapshot.forEach((snapshot) => {
              players.push(snapshot.data() as Player);
            });
            setPlayers(players);
          });
    
          const currentPlayerId = getCurrentPlayerId(id);
          if (!currentPlayerId) {
            history.push(`/join/${id}`);
          }
          setCurrentPlayerId(currentPlayerId);
        }
        fetchData(id);
        
    }, [id, history]);

   // alert(JSON.stringify(game));
   // alert(JSON.stringify(players));
    return (
        <>
          {game && players && currentPlayerId ? (
            <GameArea game={game} players={players} currentPlayerId={currentPlayerId} />
          ) : (
            <Typography>Game not found</Typography>
          )}
        </>
      );
}