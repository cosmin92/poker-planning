export interface LoginInterface {
    login(player: {username: string; password: string}): void;
}