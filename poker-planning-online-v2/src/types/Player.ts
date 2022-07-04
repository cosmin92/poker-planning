import { Status } from "./Status";

export interface Player{
    name: string,
    id: string,
    status: Status,
    value?: number,
    emoji?: string,
}
