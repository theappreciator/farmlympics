export interface Game {
    id: string;
    name: string;
}

export type GameLocation = "field" | "front yard" | "back yard" | "baseball field" | "whole yard" | "tbd";

export interface GameEvent {
    game: Game;
    order: number;
    playTime: number;
    gatheringTime: number; // Time to gather for the game
    location: GameLocation;
    intro: string;
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
        intro: "Every day begins by thinking through everything that needs to be done.",
    },
    {
        game: {
            id: "cowbranding",
            name: "Cow Branding",
        },
        order: 2,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
        intro: "Make sure all your cows are marked in case they get out",
    },
    {
        game: {
            id: "cowbanding",
            name: "Cow Banding",
        },
        order: 3,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
        intro: "Help your wild bulls become mild-mannered steers",
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
        intro: "Gather your tools to complete the rest of your work"
    },
    {
        game: {
            id: "eggstomarket",
            name: "Taking Eggs to the Market",
        },
        order: 5,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
        intro: "Sell your eggs to make some money"
    },
    {
        game: {
            id: "plantatree",
            name: "Plant a Tree",
        },
        order: 7,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
        intro: "Make a memory for future generations"
    },
    {
        game: {
            id: "cowpatty",
            name: "Cow Patty Toss",
        },
        order: 6,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
        intro: "Put nutrients in your dirt"
    },
    {
        game: {
            id: "tbdb",
            name: "TBD Game",
        },
        order: 8,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
        intro: "TBD..."
    }
]

export default games