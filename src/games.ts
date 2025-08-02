export interface Game {
    name: string;
}

export type GameLocation = "field" | "front yard" | "back yard" | "tbd";

export interface GameEvent {
    game: Game;
    order: number;
    playTime: number;
    gatheringTime: number; // Time to gather for the game
    location: GameLocation;
}

export const GATHERING_MINUTES = 25;

const games: GameEvent[] = [
    {
        game: {
            name: "Game 1",
        },
        order: 1,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            name: "Game 2",
        },
        order: 2,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            name: "Game 3",
        },
        order: 3,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            name: "Game 4",
        },
        order: 4,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            name: "Game 5",
        },
        order: 5,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            name: "Game b",
        },
        order: 6,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    }
]

export default games