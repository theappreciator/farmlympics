import {
  type GeneralEvent,
} from '../types/index';

const generalEvents: GeneralEvent[] = [
    {
        kind: "GeneralEvent",
        name: "Setup Activities",
        day: "Saturday",
        time: "7a",
        info: [
            'setup tents',
            'setup games',
            'setup music and audio'
        ],
        items: [
            {
                name: "Coffee",
                qty: "1 1lb bag",
                preferredStore: "Home"
            },
            {
                name: "Fruit",
                qty: "2 trays",
                preferredStore: "Food Lion"
            },
            {
                name: "Gatorades",
                qty: "60 bottles",
                preferredStore: "Food Lion"
            },
            {
                name: "Other sodas",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Bottled Waters",
                qty: "20 bottles",
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
            }
        ]
    },
    {
        kind: "GeneralEvent",
        name: "Last Minute Setup Activities",
        day: "Sunday",
        time: "7a",
        info: [
            'get ice',
            'game setup',
            'drink station setup',
            'last minute questions'
        ],
        items: [
            {
                name: "Coffee",
                qty: "1 5lb bag",
                preferredStore: "Home"
            },
            {
                name: "Chips",
                qty: "10 bags",
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit",
                qty: "2 trays",
                preferredStore: "Food Lion"
            },
            {
                name: "Gatorades",
                qty: "60 bottles",
                preferredStore: "Food Lion"
            },
            {
                name: "Coke Zero",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Diet Dr. Pepper",
                qty: "2 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Fizzy Waters",
                qty: "3 12 packs",
                preferredStore: "Food Lion"
            },
            {
                name: "Other sodas",
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
                name: "Macadamia Nuts",
                qty: "1 large bag",
                preferredStore: "Costco"
            }
        ]
    },
]

export default generalEvents;