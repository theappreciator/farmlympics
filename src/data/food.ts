import {
  type FoodEvent,
} from '../types/index';

const meals: FoodEvent[] = [
    {
        kind: "FoodEvent",
        meal: "Breakfast",
        name: "Breakfast - TBD",
        day: "Saturday",
        time: "8a",
        info: [],
        menu: [],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Lunch",
        name: "Lunch - TBD",
        day: "Saturday",
        time: "12p",
        info: [],
        menu: [],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Breakfast",
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
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Dinner",
        name: "Dinner - Mexican",
        day: "Saturday",
        time: "6p",
        showDetail: true,
        info: [
            "Sit down at Mexican Restaurant in Yanceyville",
            "Need headcount in advance for reservation"
        ],
        menu: [],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Breakfast",
        name: "Breakfast - TBD",
        day: "Sunday",
        time: "8a",
        info: [
            "Continential breakfast style?"
        ],
        menu: [],
        items: [
            {
                name: "Croissants",
                qty: "30",
                preferredStore: "Food Lion"
            },
            {
                name: "Bananas",
                qty: "20",
                preferredStore: "Food Lion"
            },
        ]
    },
    {
        kind: "FoodEvent",
        meal: "Lunch",
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
                name: "Sub Sandwiches"
            }
        ],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Other",
        name: "Cocktail Hour",
        day: "Sunday",
        time: "4p",
        info: [
            "Formal attire",
        ],
        menu: [],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Dinner",
        name: "Dinner - TBD",
        day: "Sunday",
        time: "6p",
        info: [],
        menu: [],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Other-Evening",
        name: "Campfire",
        day: "Sunday",
        time: "7p",
        menu: [],
        info: [
            'S\'mores',
            'Milkshakes',
        ],
        items: [
            {
                name: "Marshmallows",
                qty: "2 bags",
                preferredStore: "Food Lion"
            },
            {
                name: "Graham Crackers",
                qty: "2 boxes",
                preferredStore: "Food Lion",
            },
            {
                name: "Reese's Peanut Butter Cups",
                qty: "12 chocolates",
                preferredStore: "Food Lion"
            },
            {
                name: "Hershey mini chocolate bars",
                qty: "12 bars",
                preferredStore: "Food Lion"
            },
            {
                name: "Marshmallow skewers",
                qty: "10+ poles",
                preferredStore: "Home"
            }
        ]
    },
    {
        kind: "FoodEvent",
        meal: "Breakfast",
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
        items: [
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
        meal: "Lunch",
        name: "Lunch - TBD",
        day: "Monday",
        time: "12p",
        info: [],
        menu: [],
        items: []
    },
    {
        kind: "FoodEvent",
        meal: "Dinner",
        name: "Dinner - TBD",
        day: "Monday",
        time: "6p",
        info: [],
        menu: [],
        items: []
    },
]

export default meals;