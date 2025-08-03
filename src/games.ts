export interface Game {
    id: string;
    name: string;
}

export type GameLocation = "field" | "front yard" | "back yard" | "side yard" | "whole yard" | "tbd";

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
            id: "farmersays",
            name: "Farmer Says",
        },
        order: 1,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "front yard",
    },
    {
        game: {
            id: "cowbranding",
            name: "Cow Branding",
        },
        order: 2,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "side yard",
    },
    {
        game: {
            id: "cowbanding",
            name: "Cow Branding",
        },
        order: 3,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "side yard",
    },
    {
        game: {
            id: "scavenger",
            name: "Scavenger Hunt",
        },
        order: 4,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "whole yard",
    },
    {
        game: {
            id: "eggstomarket",
            name: "Taking Eggs to the Market",
        },
        order: 5,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "side yard",
    },
    {
        game: {
            id: "plantatree",
            name: "Plant a Tree",
        },
        order: 6,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            id: "tbda",
            name: "TBD Game",
        },
        order: 7,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            id: "tbdb",
            name: "TBD Game",
        },
        order: 8,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    }
]

export default games