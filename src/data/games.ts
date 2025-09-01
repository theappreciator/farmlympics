import {
  type GameEvent,
} from '../types/index';

export const GATHERING_MINUTES = 25;

const games: GameEvent[] = [
  {
    
    kind: "GameEvent",
    game: {
      kind: "Game",
      id: "farmersays",
      name: "Farmer Says",
      intro: "Every day begins by thinking through everything that needs to be done",
      what: "Farm themed remix of Simon Says",
      winning: "Team with the last Farmhand standing after three rounds",
      how: [
        "The Off Team determines 1 player to be the Farmer.",
        "The rest of the Off Team lines up at the sidelines to be the Scarecrows.",
        "Entire On Team lines up at starting line to be the Farmhands.",
        "The Farmer gives the orders and Farmhands should listen closely.",
        "Farmhands should only move if the Farmer says, \"Farmer Says\".",
        "If the Farmer does not say, \"Farmer Says\", then don't move! Any Farmhand that does move is out!",
        "The Scarecrows support checking the Farmhands are paying attention.",
        "Anyone from Farmhands remaining at end of time plays in final round.",
        "Swap team roles and play a second round.",
        "Final round is played with Farmhand winners from round 1 + round 2.",
        "Final round Farmer role is both Farmers, alternating orders",
        "Last Farmhand standing at end of round 3 is on the winning team",
        "In the case of multiple Farmhands at end of round 3, the team with the largest number wins"

      ],
      rules: [
        "Three rounds",
        "Rounds are 5 minutes",
        "Farmer = 1 player from Off Team",
        "Scarecrows = the rest of the Off Team",
        "Farmhands = entire On Team",
        "No running",
        "Players can shout and jeer in the spirit of the game and should not be distraction to other players",
        "Ties will be determined by The Judges",
      ],
      setup: [
        "Farmer hat x2 and overalls x2",
        "Spray line for starting line",
        "Spray line for farmer area",
        "Spray line for sidelines"
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
    info: [],
    items: [
      {
        name: "Stopwatch",
        qty: "1",
        preferredStore: "Home",
      },
      {
        name: "Pencil and Paper",
        qty: "1",
        preferredStore: "Home"
      },
      {
        name: "Farmer Overalls",
        qty: "2",
        preferredStore: "Home"
      },
      {
        name: "Farmer Hats",
        qty: "2",
        preferredStore: "Home"
      },
      {
        name: "Marking paint",
        qty: "2 bottles",
        preferredStore: "Lowes"
      },
    ],
  },
  {
    kind: "GameEvent",
    game: {
      kind: "Game",
      id: "cowbranding",
      name: "Cow Branding",
      intro: "Make sure all your cows are marked in case they get out!",
      what: "Remix of Pin the Tail on the Donkey",
      winning: "Highest score wins!",
      how: [
        "Cows are setup in the field and need to be branded",
        "Both teams send groups of 6 to the starting line to be Cowpokes (x3) and Farmhands (x3)",
        "Cowpoke is blindfolded, is given a brand, and gets to brand up to 1 cow",
        "Farmhand is not blindfolded and supports their Cowpoke with words",
        "Cowpokes chooses a unique stamp color for that round, then stamps the back of their own hand to track color choice",
        "Cowpoke is spun 3-5 times and sent to brand a cow while the farmhand follows nearby and provides instructions",
        "Cowpoke is done after branding 1 cow or when time is up, whichever happens first",
        "Points are determined by unique cows branded and closeness within target. Ex:",
        [
          "Player 1 (Team A) branded a cow = +10 pts",
          "Player 1 (Team A)'s brand was within largest ring = +3 pts",
          "Player 2 (Team A) branded the same cow = 0 additional points",
          "Player 2 (Team A)'s brand was within the smallest ring = +10 pts",
          "Total points = 23 pts",
        ],
        "Write down points for the round",
        "Cowpoke and Farmhand trade roles, and repeat steps above",
        "Teams continue sending groups of 6 (or less for last round) until everyone has had a chance to brand a cow",
      ],
      rules: [
        "Each round is 1 minute",
        "Each unique cow = +10 pts",
        "Outside of outer ring = no points",
        "Inside largest ring = +3 point",
        "Insde second largest ring = +6 points",
        "Inside smallest ring = +10 points",
        "Score = team's total points / team's number of players. Ex:",
        [
          "Team A has 8 players and scores 48 pts total",
          "Team A Score = 6 (48 pts / 8 players)",
          "Team B has 9 players, chooses 1 person to play a Famrhand twice for a total of 10 'players', and scores 55 pts total",
          "Team B Score = 5.5 (55 pts / 10 players",
        ],
        "If player count is uneven to send both a Cowpoke and a Farmhand, a team can choose any of their players to fill their open role",
        "Farmhands cannot touch any other players",
        "Players can shout and jeer in the spirit of the game and should not be distraction to other players"
      ],
      setup: [
        "4 cows created, 2 per 'side'",
        "6 blindfolds",
        "6 stamps setup",
        "6 colors of paint for stamps",
        "Starting line setup",
        "Middle line between cows setup",
        "Waiting area setup",
        "Pencil/paper for score tracking",
        "Stopwatch for time tracking"
      ],
      time: [
        "round = 6, assuming team of 16-18 people",
        "round = 6 min, 3 min setup, 1 min play, 2 min collect points",
        "play time = ~36 min, 6 round * 6 min to execute"
      ],
    },
    order: 2,
    playTime: 75,
    gatheringTime: GATHERING_MINUTES,
    location: "baseball field",
    info: [],
    items: [
      {
        name: "Stopwatch",
        qty: "1",
        preferredStore: "Home",
      },
      {
        name: "Pencil and Paper",
        qty: "1",
        preferredStore: "Home"
      },
      {
        name: "Lumber - 2x4x8ft",
        qty: "4",
        preferredStore: "Lowes"
      },
      {
        name: "Posterboard",
        qty: "4 sheets",
        preferredStore: "Home",
      },
      {
        name: "Plywood panels",
        qty: "4",
        preferredStore: "Lowes"
      },
      {
        name: "Screws",
        qty: "16 screws",
        preferredStore: "Lowes"
      },
      {
        name: "Blindfolds",
        qty: "6",
        preferredStore: "Amazon"
      },
      {
        name: "Stamps",
        qty: "6",
        preferredStore: "Home"
      },
      {
        name: "Washable paint",
        qty: "6+ unique colors, 2oz+ per",
        preferredStore: "Amazon"
      },
      {
        name: "Paper Plates (pallettes)",
        qty: "6+",
        preferredStore: "Home"
      },
      {
        name: "Marking paint",
        qty: "2 bottles",
        preferredStore: "Lowes"
      }
    ],
  },
  {
    kind: "GameEvent",
    game: {
      kind: "Game",
      id: "cowbanding",
      name: "Cow Banding",
      intro: "Help your wild bulls become mild-mannered steers",
      what: "Farm themed remix of ring toss",
      winning: "Highest score wins!",
      how: [
        "Cows are setup in the field and need to be banded, 2 cows per team",
        "Both teams send groups of 5 to the starting line to be Cowpokes",
        "Cowpokes are given 5 rings to for 'banding' the cow (tossing onto the stake)",
        "Cowpoke throws rings, points are calculated, rings are collected, and the next round starts",
        "Teams continue sending groups of 5 (or less for last round) until everyone has had a chance to band a cow",
      ],
      rules: [
        "Players must throw behind the line - no foot fouls!",
        "Players have 1 minute to through all 5 rings",
        "Players can throw onto any stake on their side",
        "Any ring touching the stake while not touching the ground counts",
        "Score = total number of rings on / number of players. Ex:",
        [
          "Team A has 8 players and gets 16 pts",
          "Team A Score = 2 (16 pts / 8 players)",
          "Team B has 10 players and scores 25 pts total",
          "Team B Score = 2.5 (25 pts / 10 players",
        ],
        "Players can shout and jeer in the spirit of the game and should not be distraction to other players"
      ],
      setup: [
        "50 rings, 5 per each of 10 players at a time",
        "Setup stakes x4 for tossing",
        "Paint starting line",
        "Paint center line"
      ],
      time: [
        "rounds = 4, 5 people per round for 16-18 people",
        "round = 6 min, setup time = 3 min, play time = 1 min, score time = 2 min",
        "play time = 24 min"
      ],
    },
    order: 3,
    playTime: 75,
    gatheringTime: GATHERING_MINUTES,
    location: "baseball field",
    info: [],
    items: [
      {
        name: "Stopwatch",
        qty: "1",
        preferredStore: "Home",
      },
      {
        name: "Pencil and Paper",
        qty: "1",
        preferredStore: "Home"
      },
      {
        name: "Throwing rings 7\"",
        qty: "50",
        preferredStore: "Amazon"
      },
      {
        name: "Lumber - 2x4x8ft",
        qty: "2",
        preferredStore: "Lowes"
      },
      {
        name: "Rope",
        qty: "4 x 2-3ft",
        preferredStore: "Amazon"
      },
      {
        name: "Tennis Balls",
        qty: "8 balls",
        preferredStore: "Amazon"
      },
    ]
  },
  {
    kind: "GameEvent",
    game: {
      kind: "Game",
      id: "scavenger",
      name: "Scavenger Hunt",
      intro: "Gather your tools to complete the rest of your work",
      what: "Team based scavenger hunt",
      winning: "Highest score wins!",
      how: [
        "Rounds consist of a round of hiding tokens in the yard, followed by searching for the tokens.",
        "Teams all start at Home Base, waiting for the hiding round to start.",
        "Each team member will be given 1 token to hide.",
        "Teams will also be given an additional 1 'golden token' to hide, 1 per team.",
        "Front yard = yellow tokens",
        "Back yard = blue tokens",
        "Team Flock hides in the front yard first, back yard second.",
        "Team Horns hides in the back yard first, front yard second.",
        "During hiding round, teams must hide their tokens in their yard. This should be a secret from the other team!",
        "Once player has hidden their token, return to their yard's safe area (front porch/back porch)",
        "Once all players have hidden tokens, or time is up, all players return to Home Base to start searching round",
        "During searching round, teams should look for and collect tokens.",
        "After searching round, teams move to Home Base",
        "Calculate points and write them down for that round",
        "Teams swap yards and repeat",
        "Most points wins!"
      ],
      rules: [
        "Normal token = 1 point",
        "Golden token = 2 points",
        "Score = % of points found. (points found / total points hidden). Ex:",
        [
          "Team A has 8 players and hides 9 tokens - 8 normal and 1 golden - for 10 points total",
          "Team B finds 7 tokens - 6 normal and 1 golden - for 8 points total",
          "Score = 8 / 10 = 80%"
        ],
        "Hiding round = 5 minutes",
        "Searching round = 10 minutes",
        "Tokens should be hidden between ground level and ~6ft off of the ground",
        "Tokens should be hidden in a place that a hand can reasonably reach into/on top of. Ex:",
        [
          "on top of a wheel barrow",
          "on top of or inside of a bush",
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
        "Team mates may help each other in hiding and searching, ex: the Little Ones will want help, please see previous rules on max number of tokens per person.",
        "Players should, but optional, yell out that they found a token",
        "Players can shout and jeer in the spirit of the game and should not be distraction to other players"

      ],
      setup: [
        "Home Base needs to be defined.",
        "All tokens need to be at Home Base.",
        "Need paper/pencil to keep score."
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
    info: [],
    items: [
      {
        name: "Stopwatch",
        qty: "1",
        preferredStore: "Home",
      },
      {
        name: "Pencil and Paper",
        qty: "1",
        preferredStore: "Home"
      },
      {
        name: "Hiding Tokens - blue",
        qty: "18",
        preferredStore: "Home"
      },
      {
        name: "Hiding Tokens - yellow",
        qty: "18",
        preferredStore: "Home"
      },
    ]
  },
  {
    kind: "GameEvent",
    game: {
      kind: "Game",
      id: "eggstomarket",
      name: "Taking Eggs to the Market",
      intro: "Sell your eggs to make some money",
      what: "Launch 'eggs', avoid predators, sell eggs for hard cash!",
      winning: "Highest score wins!",
      how: [
        "Teams choose 2 players to send into the field, and everyone else lines up behind their teams' water balloon launcher",
        "Players in the field are Catchers and must put on an apron",
        "Launcher gets 3 balloons from 'The Mother Hen'",
        "Launcher shoots each balloon, 1, 2, or 3 at a time, across the field",
        "Players in the field can catch the balloons with their apron.",
        "After a launcher completes launching their eggs, the Launcher changes roles to a Catcher:",
        [
          "Grab an apron",
          "Go to the field, ready to catch eggs"
        ],
        "After a launcher completes launching their eggs, any Catcher that has caught an egg delivers their egg(s) to the market:",
        [
          "Go to Market Area",
          "Places their caught egg(s) in egg cartons",
          "Removes their apron",
          "Finally moves to the waiting area and cheers from the sidelines"
        ]
      ],
      rules: [
        "1 'egg' = 1 pt",
        "Score = team's total points / team's number of players. Ex:",
        [
          "Team A has 8 players and scores 24 pts total",
          "Team A Score = 3 (24 pts / 8 players)",
          "Team B has 10 players and scores 45 pts total",
          "Team B Score = 4.5 (45 pts / 10 players",
        ],
        "Eggs that have touched the ground are broken and do not count",
        "Catchers can catch eggs from either Lancher",
        "Players can shout and jeer in the spirit of the game and should not be distraction to other players"
      ],
      setup: [
        "Water balloon launchers x2",
        "aprons x2",
        "egg cartons x2",
        "balloons x90",
        "pencil",
        "paper",
        "water buckets x2",
        "place predators",
        "spray field lines"
      ],
      time: ["TBD"],
    },
    order: 5,
    playTime: 75,
    gatheringTime: GATHERING_MINUTES,
    location: "baseball field",
    info: [],
    items: [
      {
        name: "Stopwatch",
        qty: "1",
        preferredStore: "Home",
      },
      {
        name: "Pencil and Paper",
        qty: "1",
        preferredStore: "Home"
      },
      {
        name: "Water Balloon Launchers",
        qty: "2",
        preferredStore: "Amazon"
      },
      {
        name: "Balloons",
        qty: "90",
        preferredStore: "Amazon"
      },
      {
        name: "Aprons",
        qty: "10",
        preferredStore: "Home"
      },
      {
        name: "Egg Cartons",
        qty: "10 cartons",
        preferredStore: "Home"
      },
      {
        name: "Water Buckets",
        qty: "2",
        preferredStore: "Home"
      },
      {
        name: "Lumber - 2x4x8ft",
        qty: "4",
        preferredStore: "Lowes"
      },
      {
        name: "Screws",
        qty: "1 box",
        preferredStore: "Lowes"
      },
      {
        name: "Long, smooth nails",
        qty: "4",
        preferredStore: "Lowes"
      },
    ]
  },
  {
    kind: "GameEvent",
    game: {
      kind: "Game",
      id: "cowpatty",
      name: "Cow Patty Toss",
      intro: "Farmhands are out in the pasture, fertalizing the soil for future crops",
      what: "Throwing 'cow patties' (flying discs) into targets on the field",
      winning: "Highest score wins!",
      how: [
        "On Team sends groups of 5 to the starting line to be Fertalizers",
        "Off Team stands in the waiting area",
        "A Fertalizer's job is to spread nutrients into the earth",
        "Fertalizers have 3 'cow patties' (flying discs) to enrich (throw) onto the earth",
        "Targets will be placed on the ground for Fertizers to throw into",
        "Fertalizers score points based on where their 3 discs lay, determined by what they are in or touching. Ex:",
        [
          "Disc 1 landed outside the largest ring = 0 pts",
          "Disc 2 landed in the smallest ring = 3 pts",
          "Disc 3 landed in the bullseye target = 5 pts",
          "Total points = 8 pts"
        ],
        "Write down points for the wave",
        "On Team continues sending waves of 5 (or fewer on final wave) until everyone has fertalized the earth",
        "Teams swap and a new round of fertalizing begins"
      ],
      rules: [
        "Outside of outer ring = no points",
        "Inside largest ring = 1 point",
        "Insde second largest ring = 2 points",
        "Inside smallest ring = 3 points",
        "Inside bullseye target (bucket) = 5 points",
        "Score = team's total points / team's number of players. Ex:",
        [
          "Team A has 8 players and scores 48 pts total",
          "Team A Score = 6 (48 pts / 8 players)",
          "Team B has 10 players and scores 55 pts total",
          "Team B Score = 5.5 (55 pts / 10 players",
        ],
        "Players must throw behind the line - no foot fouls!",
        "Players can shout and jeer in the spirit of the game and should not be distraction to other players"
      ],
      setup: [
        "Set up normal starting line",
        "Set up little one starting line",
        "Set up targets",
        "Set up waiting area",
        "12 flying discs",
        "1 bucket for inner target"
      ],
      time: [
        "waves = 8, 4 per team of 16-18 people",
        "wave = 5 min = 2 min to get discs and people to start line, 30 sec to throw, 2 minutes to calculate points",
        "play time = 40 min = 8 waves * 5 min",
      ],
    },
    info: [],
    items: [
      {
        name: "Stopwatch",
        qty: "1",
        preferredStore: "Home",
      },
      {
        name: "Pencil and Paper",
        qty: "1",
        preferredStore: "Home"
      },
      {
        name: "Flying Discs",
        qty: "12",
        preferredStore: "Amazon"
      },
      {
        name: "Marking Paint",
        qty: "2",
        preferredStore: "Lowes",
      },
      {
        name: "Bucket",
        qty: "1",
        preferredStore: "Home",
      }
    ],
    order: 6,
    playTime: 75,
    gatheringTime: GATHERING_MINUTES,
    location: "baseball field",
  },
  {
    kind: "GameEvent",
    game: {
      kind: "Game",
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
    info: [],
    items: [],
  },
]

export default games