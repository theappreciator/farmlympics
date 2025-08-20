export interface FoodEvent {
    kind: "FoodEvent";
    name: string;
    day: "Friday" | "Saturday" | "Sunday" | "Monday";
    time: string;
    menu: Menu[];
    info: string[];
    groceries: Grocery[];
}

export interface Grocery {
    name: string;
    qty: string;
    preferredStore: "None" | "Home" | "Food Lion" | "Harris Teeter" | "Midtown Market" | "Lowes Foods";
}

export interface Menu {
    name: string;
}

const meals: FoodEvent[] = [
    {
        kind: "FoodEvent",
        name: "Breakfast - TBD",
        day: "Saturday",
        time: "8a",
        info: [],
        menu: [],
        groceries: []
    },
        {
        kind: "FoodEvent",
        name: "Lunch - TBD",
        day: "Saturday",
        time: "12p",
        info: [],
        menu: [],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Breakfast - Chick-Fil-A",
        day: "Saturday",
        time: "8a-TBD",
        info: [],
        menu: [
            {
                name: "CFA Chicken Minis",
            },
            {
                name: "Fruit",
            },
            {
                name: "Coffee",
            },
            {
                name: "Juice",
            }
        ],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Dinner - Mexican",
        day: "Saturday",
        time: "6p",
        info: [
            "Sit down at Mexican Restaurant in Yanceyville",
            "Need headcount in advance for reservation"
        ],
        menu: [],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Breakfast - TBD",
        day: "Sunday",
        time: "8a",
        info: [],
        menu: [],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Lunch - Jersey Mike's",
        day: "Sunday",
        time: "12p",
        info: [
            "Expect to arrive at house at 11:30a",
            "Order specifics need to be placed at 10:00a",
            "Be mindful of travel time to Roxboro and back"
        ],
        menu: [
            {
                name: "Sub Sandwhiches"
            }
        ],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Cocktail Hour",
        day: "Sunday",
        time: "4p",
        info: [
            "Formal attire",
        ],
        menu: [],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Dinner - TBD",
        day: "Sunday",
        time: "6p",
        info: [],
        menu: [],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Breakfast",
        day: "Monday",
        time: "8a",
        info: [],
        menu: [
            {
                name: "Biscuits"
            },
            {
                name: "Sausage"
            },
            {
                name: "Eggs"
            },
            {
                name: "Fruit"
            },
            {
                name: "Coffee"
            },
        ],
        groceries: [
            {
                name: "Frozen Biscuits",
                qty: "60 biscuits",
                preferredStore: "Food Lion"
            },
            {
                name: "Sausage Patties - Neeses",
                qty: "100 patties",
                preferredStore: "Food Lion"
            },
            {
                name: "Eggs",
                qty: "30 eggs",
                preferredStore: "Home"
            },
            {
                name: "Coffee",
                qty: "30 cups",
                preferredStore: "Home"
            }
        ]
    },
    {
        kind: "FoodEvent",
        name: "Lunch - TBD",
        day: "Monday",
        time: "12p",
        info: [],
        menu: [],
        groceries: []
    },
    {
        kind: "FoodEvent",
        name: "Dinner - TBD",
        day: "Monday",
        time: "6p",
        info: [],
        menu: [],
        groceries: []
    },
]

export default meals;