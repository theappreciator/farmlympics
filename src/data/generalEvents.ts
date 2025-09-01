import {
  type GeneralEvent,
} from '../types/index';

import allGames from "./games";

const generalEvents: GeneralEvent[] = [
    {
        id: "1",
        kind: "GeneralEvent",
        name: "Setup Activities",
        day: "Saturday",
        time: "7a",
        info: [
            'setup canopies [30 min, 1 person]',
            'spray field boundaries and lines [30 min, 1 person]',
            'setup fans [30 min, 1 person]',
            'setup scoreboard [15 min, 1 person]',
            'setup whiteboard, easel, and markers [15 min, 1 person]',
            'coordinate first aid kits [30 min, 1 person]',
            [
                "bandaids",
                "ointment",
                "tweezers",
                "pain relivers (Advil, Aspirin, Tylenol, Ibuprofen)",
                "wet wupes"
            ],
            'create water balloon launcher [2 hours, 2 people]',
            [
                "Game - Eggs to Market",
                "TBD, need 2x4s, maybe 4x4s, screws",
                "Needs brackets to connect 2x4s?",
                "need to determine if want them fixed in the ground or movable",
                "Put long nails into sides of posts",
                "Attach water balloon launcher, handle (safely) wrapped around nails"
            ],
            'create cows [2 hours, 2 people]',
            [
                "Game - Branding, Branding",
                "cut 4x cow backs - plywood pieces to size (~22\" x ~28\")",
                "cut 8x posts - rip 2x4s into 2x2s (~4ft)",
                "pound posts into the ground",
                "screw backs to posts",
                "verify posterboard fits onto backs"
            ],
            'create predators for cows [2 hours, 2 people]',
            [
                "Game - Eggs to Market",
                "cut 2-4x backs - plywood pieces to isze (~22\" x ~28\")",
                "cut 4-8x posts - rip 2x4s into 2x2s (~2ft)",
                "make 2-4x skids, for moving the predators - rectangle of 2x4s (~3ft x ~2ft)",
                "screw posts into skids",
                "screw backs to posts",
                "verify posterboard fits onto backs",
            ],
            'setup music and audio [2 hours, 1 person   ]',
            [
                "baseball field side",
                "table",
                "power cord",
                "microphone",
                "microphone stand",
                "speakers only on baseball field side?"
            ],
            'Setup - Farmer Says [15 min, 1 person]',
            [
                ...allGames.find(g => g.game.id === "farmersays")?.game.setup || []
            ],
            'Setup - Cow Branding [15 min, 1 person, +cow making]',
            [
                ...allGames.find(g => g.game.id === "cowbranding")?.game.setup || []
            ],
            'Setup - Cow Banding [15 min, 1 person, +cow making]',
            [
                ...allGames.find(g => g.game.id === "cowbanding")?.game.setup || []
            ],
            'Setup - Scavenger Hunt [15 min, 1 person, +cow making]',
            [
                ...allGames.find(g => g.game.id === "scavenger")?.game.setup || []
            ],
            'Setup - Eggs to Market [30 min, 1 person, +water balloon launcers]',
            [
                ...allGames.find(g => g.game.id === "eggstomarket")?.game.setup || []
            ],
            'Setup - Cow Patty Toss [30 min, 1 person]',
            [
                ...allGames.find(g => g.game.id === "cowpatty")?.game.setup || []
            ]
        ],
        items: [
            {
                name: "Gatorades",
                qty: "60 bottles",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Other",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Bottled Waters",
                qty: "48 bottles",
                preferredStore: "Food Lion"
            },
            {
                name: "Peanuts",
                qty: "1 giant tin, large peanuts",
                preferredStore: "Costco"
            },
            {
                name: "Macadamia Nuts",
                qty: "1 large bag",
                preferredStore: "Costco"
            },
            {
                name: "Marking Paint",
                qty: "8 bottles",
                preferredStore: "Lowes"
            },
            {
                name: "Canopies",
                qty: "4+",
                preferredStore: "Home"
            },
            {
                name: "Folding Chairs",
                qty: "10+",
                preferredStore: "Home"
            },
            {
                name: "Coolers",
                qty: "8+",
                preferredStore: "Home"
            },
            {
                name: "Airplanes",
                qty: "4+",
                preferredStore: "Home"
            },
            {
                name: "Tables",
                qty: "4+",
                preferredStore: "Home",
            },
            {
                name: "Ice",
                qty: "6 bags",
                preferredStore: "Home"
            }
        ]
    },
    {
        id: "2",
        kind: "GeneralEvent",
        name: "Dry Run/Walkthrough and Rules Questions",
        day: "Saturday",
        time: "1p",
        info: [
            "Get group of people together to play all the games",
            "Ask questions on rules"
        ],
        items: []
    },
    {
        id: "3",
        kind: "GeneralEvent",
        name: "Final Setup Activities",
        day: "Sunday",
        time: "7a",
        info: [
            'get ice [1 hour, 2 people]',
            "start crockpots",
            [
                "ground beef",
                "black beans"
            ],
            'game setup [1 hour, 2 people]',
            [
                "Papers for score",
                "Pencils for score",
                "Stopwatch",
                "Game items (hats, overalls, tokens, etc)",
                "Posterboards on cow stands",
                "Posterboards on predators stands",
                "Tables in place"
            ],
            "verify spray lines [15 min, 2 people]",
            "setup fans [30 min, 1 person]",
            "sound check [15 min, 1 person]",
            'last minute questions'
        ],
        items: [
            {
                name: "Gatorades",
                qty: "60 bottles",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Coke Zero",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Coke (regular)",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Diet Dr. Pepper",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Starry",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Fizzy Waters",
                qty: "3 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Soda - Other",
                qty: "4 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Bottled Waters",
                qty: "100 bottles",
                preferredStore: "Food Lion"
            },
            {
                name: "Peanuts",
                qty: "1 giant tin, large peanuts",
                preferredStore: "Costco"
            },
            {
                name: "Wet Wipes",
                qty: "3 large packs",
                preferredStore: "Home"
            },
            {
                name: "Megaphone",
                qty: "1",
                preferredStore: "Home"
            }
        ]
    },
    {
        id: "4",
        kind: "GeneralEvent",
        name: "Clean up!",
        day: "Monday",
        time: "7a",
        info: [
            "Music",
            "Cows",
            "Predators",
            "Tables",
            "Chairs",
            "Trash",
            "Coolers",
            "All the knick-knacks",
        ],
        items: [],
        showDetail: true
    },
    {
        id: "5",
        kind: "GeneralEvent",
        name: "Hugs and goodbyes",
        day: "Monday",
        time: "11a",
        info: [
            "Get some leftovers for the road!",
        ],
        items: [],
        showDetail: true
    }
]

export default generalEvents;