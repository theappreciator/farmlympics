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
    what: string;
    winning: string;
    how: string[];
    rules: string[];
    setup: string[];
    time: string[];
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
        intro: "Every day begins by thinking through everything that needs to be done",
        what: "Farm themed remix of Simon Says",
        winning: "Be the last one standing after three rounds",
        how: [
            "The Off Team determines 1 player to be the Farmer.",
            "The rest of the Off Team lines up at the sidelines to be the Scarecrows.",
            "Entire On Team lines up at starting line to be the Farmhands.",
            "The Farmer gives the orders and Farmhands should listen closely.",
            "Farmhands should only move if the Farmer says, \"Farmer Says\".",
            "If the Farmer does not say, \"Farmer Says\", then don't move! Any Farmhand that does move is out!",
            "The Off Team supports checking the Farmhands are paying attention.",
            "Anyone from On Team remaining at end of time plays in final round.",
            "Swap team roles and play a second round.",
            "Final round is played with Farmhand winners from round 1 + round 2.",
            "Final round Farmer role is both Farmers, alternating orders",

        ],
        rules: [
            "Three rounds",
            "Round 1 + 2 = 5 minutes",
            "Round 3 = 5 minutes",
            "Farmer = 1 player from Off Team",
            "Scarecrowss = the rest of the Off Team",
            "Farmhands = entire On Team",
            "Players cannot yell, jeer, or distract other players",
        ],
        setup: [
            "Farmer needs overalls and a farmer hat",
            "Spray line for starting line",
            "Determine area for sidelines"
        ],
        time: [
            "round = 10 min total (5 minutes play, 3 minutes setup, 2 minutes pointing)",
            "3 rounds = 30 minutes",
            "particpants/round = entire Team + 1 then swap",
        ]


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
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
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
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
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
        intro: "Gather your tools to complete the rest of your work",
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
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
        intro: "Sell your eggs to make some money",
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
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
        intro: "Make a memory for future generations",
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
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
        intro: "Put nutrients in your dirt",
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
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
        intro: "TBD...",
        what: "TBD",
        winning: "TBD",
        how: ["TBD"],
        rules: ["TBD"],
        setup: ["TBD"],
        time: ["TBD"],
    }
]

export default games