export interface Game {
    id: string;
    name: string;
    intro: string;
    what: string;
    winning: string;
    how: (string | string[])[];
    rules: (string | string[])[];
    setup: string[];
    time: string[];
}

export type GameLocation = "field" | "front yard" | "back yard" | "baseball field" | "whole yard" | "tbd";

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
                "Last Farmhand standing at end of round 3 is on the winning team",
                "In the case of multiple Farmhands at end of round 3, the team with the largest number wins"

            ],
            rules: [
                "Three rounds",
                "Round 1 + 2 = 5 minutes",
                "Round 3 = 5 minutes",
                "Farmer = 1 player from Off Team",
                "Scarecrows = the rest of the Off Team",
                "Farmhands = entire On Team",
                "Players cannot yell, jeer, or distract other players",
                "Ties will be determined by The Judges",
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
        order: 1,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "front yard",
    },
    {
        game: {
            id: "cowbranding",
            name: "Cow Branding",
            intro: "Make sure all your cows are marked in case they get out",
            what: "TBD",
            winning: "TBD",
            how: ["TBD"],
            rules: ["TBD"],
            setup: ["TBD"],
            time: ["TBD"],
        },
        order: 2,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
    },
    {
        game: {
            id: "cowbanding",
            name: "Cow Banding",
            intro: "Help your wild bulls become mild-mannered steers",
            what: "TBD",
            winning: "TBD",
            how: ["TBD"],
            rules: ["TBD"],
            setup: ["TBD"],
            time: ["TBD"],
        },
        order: 3,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
    },
    {
        game: {
            id: "scavenger",
            name: "Scavenger Hunt",
            intro: "Gather your tools to complete the rest of your work",
            what: "Team based scavenger hunt",
            winning: "Collect the most points",
            how: [
                "Rounds consist of a round of hiding tokens in the yard, followed by searching for the tokens.",
                "Teams all start at Home Base, waiting for the hiding round to start.",
                "Each team member will be given 1 token to hide.",
                "Teams will also be given an additional 1 'golden token' to hide, 1 per team.",
                "Team Flock hides in the front yard first, back yard second.",
                "Team Horns hides in the back yard first, front yard second.",
                "During hiding round, teams must hide their tokens in their yard. This should be a secret from the other team!",
                "After hiding round, teams move to Home Base to start the searching round",
                "During searching round, teams should look for and collect tokens.",
                "After searching round, teams move to Home Base to start counting points.",
                "Teams swap sides and repeat",
                "Most points wins"
            ],
            rules: [
                "Hiding round = 5 minutes",
                "Searching round = 10 minutes",
                "Tokens should be hidden between ground level and ~6ft off of the ground",
                "Tokens should be hidden in a place that a hand can reasonably reach into/on top of. Ex:",
                [
                    "on top of a wheel barrow",
                    "on top of a bush",
                    "inside of a bucket",
                ],
                "Off limits hiding methods:",
                [
                    "Burying in the ground, dirt, mulch, etc",
                    "Placing tokens into dangerous locations, ex: on top of hornet nest, in puddle of oil, inside air conditioner",
                    "Throwing token to an off limits place or otherwise unreachable place",
                    "Moving/placing items to cover token, ex: cannot cover token with mulch, cannot move a chair from the porch to place over token, cannot place a tree limb on top of token",
                ],
                "Front yard and back yard outer boundary is the gravel road",
                "Off limits areas:",
                [
                    "back porch",
                    "front porch",
                    "front yard mulch bed around house",
                    "inside the house",
                    "inside the coffee building"
                ],
                "Each team member when hiding can only hide 1 token, with exception for the player hiding the 'golden token'.",
                "Each team member when searching can only collect 1 token, with exception for any player discovering the 'golden token'.",
                "Team mates may help each other in hiding and searching, please see previous rules on max number of tokens per person.",
                "Players may yell out that they found a token",
                "Players cannot yell, jeer, or distract other players."
            ],
            setup: [
                "Home Base needs to be defined",
                "All tokens need to be at Home Base",
            ],
            time: [
                "round = 20 minutes (5 min hide, 2 min gathering, 10 min search, 3 min points calculation)",
                "2 rounds = 40 minutes",
                "particpants/round = entire Team + 1 then swap",
            ],
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
            intro: "Sell your eggs to make some money",
            what: "TBD",
            winning: "TBD",
            how: ["TBD"],
            rules: ["TBD"],
            setup: ["TBD"],
            time: ["TBD"],
        },
        order: 5,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
    },
    {
        game: {
            id: "plantatree",
            name: "Plant a Tree",
            intro: "Make a memory for future generations",
            what: "TBD",
            winning: "TBD",
            how: ["TBD"],
            rules: ["TBD"],
            setup: ["TBD"],
            time: ["TBD"],
        },
        order: 7,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",
    },
    {
        game: {
            id: "cowpatty",
            name: "Cow Patty Toss",
            intro: "Put nutrients in your dirt",
            what: "TBD",
            winning: "TBD",
            how: ["TBD"],
            rules: ["TBD"],
            setup: ["TBD"],
            time: ["TBD"],
        },
        order: 6,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "tbd",
    },
    {
        game: {
            id: "tbdb",
            name: "TBD Game",
            intro: "TBD...",
            what: "TBD",
            winning: "TBD",
            how: ["TBD"],
            rules: ["TBD"],
            setup: ["TBD"],
            time: ["TBD"],
        },
        order: 8,
        playTime: 75,
        gatheringTime: GATHERING_MINUTES,
        location: "baseball field",

    }
]

export default games