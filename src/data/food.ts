import {
  type FoodEvent,
} from '../types/index';

const meals: FoodEvent[] = [
    {
        kind: "FoodEvent",
        meal: "Breakfast",
        name: "Breakfast Special",
        day: "Saturday",
        time: "8a",
        info: [],
        menu: [
            {
                name: "Eggs",
            },
            {
                name: "Waffles",
            },
            {
                name: "Sausage"
            },
        ],
        items: [
            {
                name: "Coffee",
                qty: "1 1lb bag",
                preferredStore: "Home"
            },
            {
                name: "Eggs",
                qty: "6 eggs",
                preferredStore: "Home"
            },
            {
                name: "Sausage Patties",
                qty: "1 lb",
                preferredStore: "Food Lion"
            },
            {
                name: "Waffles",
                qty: "12",
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit - Bananas",
                qty: "3 bananas",
                preferredStore: "Food Lion"
            }
        ],
        showDetail: true
    },
    {
        kind: "FoodEvent",
        meal: "Lunch",
        name: "Serve Yourself Sammies",
        day: "Saturday",
        time: "12p",
        info: [],
        menu: [
            {
                name: "Sandwiches"
            },
            {
                name: "Cold Cuts"
            },
            {
                name: "Fruit",
            }
        ],
        items: [
            {
                name: "Midtown Market Chicken Salad",
                qty: "6 large containers",
                preferredStore: "Midtown Market",
            },
            {
                name: "Croissants",
                qty: "20",
                preferredStore: "Costco"
            },
            {
                name: "Bread",
                qty: "3 loaves",
                preferredStore: "Costco"
            },
            {
                name: "Ritz Crackers",
                qty: "1 box",
                preferredStore: "Food Lion"
            },
            {
                name: "Lunch meat",
                qty: "5 lbs",
                preferredStore: "Costco"
            },
            {
                name: "Chips",
                qty: "3 bags",
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit",
                qty: "Many",
                preferredStore: "Food Lion"
            },
        ],
        showDetail: true
    },
    {
        kind: "FoodEvent",
        meal: "Dinner",
        name: "Mexican",
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
        name: "Chicken Minis, Fruit, Yogurt",
        day: "Sunday",
        time: "8a",
        info: [
            
        ],
        menu: [
            {
                name: "Chicken minis"
            },
            {
                name: "Fruit"
            },
            {
                name: "Yogurt"
            }
        ],
        items: [
            {
                name: "Chicken minis",
                qty: "160",
                preferredStore: "Chick-Fil-A",
            },
            {
                name: "Yogurt",
                qty: "36 cups",
                preferredStore: "Costco"
            },
            {
                name: "Fruit - Bananas",
                qty: "20",
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit - Apples",
                qty: "20",
                preferredStore: "Food Lion",
            },
            {
                name: "Fruit - Grapes",
                qty: "5 lbs",
                preferredStore: "Food Lion"
            },
            {
                name: "Coffee",
                qty: "5 lbs",
                preferredStore: "Home"
            },
            {
                name: "Milk",
                qty: "2 jugs",
                preferredStore: "Food Lion"
            },
            {
                name: "Half n half",
                qty: "1 qt",
                preferredStore: "Food Lion"
            }
        ]
    },
    {
        kind: "FoodEvent",
        meal: "Lunch",
        name: "Walking Taco",
        day: "Sunday",
        time: "12p",
        info: [
            "Get a bag of chips",
            "Crush them up",
            "Put in your stuff",
            "Get a fork",
            "Eat it!"
        ],
        menu: [
            {
                name: "Walking tacos",
            },
            {
                name: "Backup - Chick-fil-A chicken sandwich"
            }
        ],
        items: [
            {
                name: "Ground Beef (cooked)",
                qty: "10 lbs",
                preferredStore: "Food Lion"
            },
            {
                name: "Shredded Cheese",
                qty: "4 1lb bags",
                preferredStore: "Food Lion"
            },
            {
                name: "Sour Cream (squeezy)",
                qty: "1 large",
                preferredStore: "Food Lion"
            },
            {
                name: "Salsa",
                qty: "4 large jars",
                preferredStore: "Food Lion"
            },
            {
                name: "Chips",
                qty: "54 small bags",
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit - Watermelon",
                qty: "40 slices",
                preferredStore: "Food Lion"
            },
            {
                name: "Plastic forks",
                qty: "50",
                preferredStore: "Food Lion"
            },
            {
                name: "Plastic spoons",
                qty: "50",
                preferredStore: "Food Lion"
            },
            {
                name: "Paper plates",
                qty: "50",
                preferredStore: "Food Lion"
            },
            {
                name: "Napkins",
                qty: "100",
                preferredStore: "Food Lion"
            },
            {
                name: "Chick-fil-A Chicken Sandwich",
                qty: "20",
                preferredStore: "Chick-Fil-A"
            }
        ]
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
        name: "Campfire Hotdogs",
        day: "Sunday",
        time: "6p",
        info: [],
        menu: [
            {
                name: "Hot dogs"
            },
            {
                name: "Backup - Chick-fil-A chicken sandwich"
            }
        ],
        items: [
            {
                name: "Hot dogs",
                qty: "40 dogs",
                preferredStore: "Food Lion"
            },
            {
                name: "Hot dog buns",
                qty: "40 buns",
                preferredStore: "Food Lion"
            },
            {
                name: "Ketchup",
                qty: "1 bottle",
                preferredStore: "Food Lion"
            },
            {
                name: "Mustard",
                qty: "1 bottle",
                preferredStore: "Food Lion"
            },
            {
                name: "Cheese slice ",
                qty: "40 slices",
                preferredStore: "Food Lion",
            },
            {
                name: "Hot dog cooking sticks",
                qty: "20 sticks",
                preferredStore: "Home",
            },
            {
                name: "Chips",
                qty: "8 large bags",
                preferredStore: "Food Lion"
            },
            {
                name: "Paper plates",
                qty: "50",
                preferredStore: "Food Lion"
            },
            {
                name: "Napkins",
                qty: "100",
                preferredStore: "Food Lion"
            },
            {
                name: "NO CHILI! NO CLEANUP!",
                qty: "0",
                preferredStore: "None"
            },
            {
                name: "Chick-fil-A Chicken Sandwich",
                qty: "20",
                preferredStore: "Chick-Fil-A"
            }
        ],
        showDetail: true,
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
            },
            {
                name: "Paper plates",
                qty: "50",
                preferredStore: "Food Lion"
            },
            {
                name: "Napkins",
                qty: "100",
                preferredStore: "Food Lion"
            },
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
            {
                name: "Chick-fil-A leftovers"
            }
        ],
        items: [
            {
                name: "Frozen Biscuits",
                qty: "20 biscuits",
                preferredStore: "Food Lion"
            },
            {
                name: "Sausage Patties",
                qty: "40 patties",
                preferredStore: "Food Lion"
            },
            {
                name: "Cheese slice",
                qty: "20 slices",
                preferredStore: "Food Lion"
            },
            {
                name: "Eggs",
                qty: "24 eggs",
                preferredStore: "Home"
            },
            {
                name: "Coffee",
                qty: "1 lb",
                preferredStore: "Home"
            },
            {
                name: "Plastic forks",
                qty: "30",
                preferredStore: "Food Lion"
            },
            {
                name: "Plastic spoons",
                qty: "30",
                preferredStore: "Food Lion"
            },
            {
                name: "Paper plates",
                qty: "30",
                preferredStore: "Food Lion"
            },
            {
                name: "Napkins",
                qty: "30",
                preferredStore: "Food Lion"
            },
            {
                name: "Milk",
                qty: "4 jugs",
                preferredStore: "Food Lion"
            },
            {
                name: "Half n half",
                qty: "1 qt",
                preferredStore: "Food Lion"
            }
        ]
    },
    {
        kind: "FoodEvent",
        meal: "Lunch",
        name: "Leftovers - Serve Yourself",
        day: "Monday",
        time: "12p",
        info: [
            "You're hungry. Figure it out youself."
        ],
        menu: [],
        items: [],
        showDetail: true
    },
    {
        kind: "FoodEvent",
        meal: "Dinner",
        name: "Leftovers - Serve Yourself",
        day: "Monday",
        time: "6p",
        info: [
            "You're hungry. Figure it out youself."
        ],
        menu: [],
        items: [],
        showDetail: true
    },
]

export default meals;