import { Status } from "./Status";

export interface Game {
    id: string;
    name: string;
    average: number;
    gameStatus: Status;
    gameType: 'Fibonacci'; 
    createdBy: string;
    createdById: string;
  }
