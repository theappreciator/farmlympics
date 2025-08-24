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
        ]
    },
]

export default generalEvents;