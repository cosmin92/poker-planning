export interface RegistrationInterface {
    registration(player: {username: string; password: string}): void;
}