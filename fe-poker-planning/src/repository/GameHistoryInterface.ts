import { History } from "../model/History";

export default interface GameHistoryInterface{
    getVotingHistory(gameId: number): History[];
}