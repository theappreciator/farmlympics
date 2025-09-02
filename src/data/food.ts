import {
  type FoodEvent,
} from '../types/index';

const meals: FoodEvent[] = [
    {
        id: "1",
        kind: "FoodEvent",
        meal: "Breakfast",
        name: "Breakfast Special",
        day: "Saturday",
        time: "8a",
        info: [],
        menu: [
            {
                name: "Something easy - Fast food",
            }
        ],
        items: [
            {
                name: "Coffee",
                qty: "1 1lb bag",
                percentUsed: 80,
                preferredStore: "Home"
            },
        ],
        showDetail: true
    },
    {
        id: "2",
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
                percentUsed: 33,
                preferredStore: "Midtown Market",
            },
            {
                name: "Croissants",
                qty: "20",
                percentUsed: 50,
                preferredStore: "Costco"
            },
            {
                name: "Bread",
                qty: "3 loaves",
                percentUsed: 33,
                preferredStore: "Costco"
            },
            {
                name: "Hoagie rolls",
                qty: "1 bag",
                percentUsed: 0,
                preferredStore: "Costco",
            },
            {
                name: "Ritz Crackers",
                qty: "1 box",
                percentUsed: 100,
                preferredStore: "Food Lion"
            },
            {
                name: "Lunch meat",
                qty: "3 lbs",
                percentUsed: 80,
                preferredStore: "Costco"
            },
            {
                name: "Chips",
                qty: "3 bags",
                percentUsed: 50,
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
        id: "3",
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
        id: "4",
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
                percentUsed: 100,
                preferredStore: "Chick-Fil-A",
            },
            {
                name: "Yogurt",
                qty: "36 cups",
                percentUsed: 20,
                preferredStore: "Costco"
            },
            {
                name: "Fruit - Bananas",
                qty: "20",
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit - Apples",
                qty: "20",
                percentUsed: 25,
                preferredStore: "Food Lion",
            },
            {
                name: "Fruit - Oranges",
                qty: "20",
                percentUsed: 0,
                preferredStore: "Food Lion"
            },
            {
                name: "Coffee",
                qty: "5 lbs",
                percentUsed: 30,
                preferredStore: "Home"
            },
            {
                name: "Milk",
                qty: "2 jugs",
                percentUsed: 100,
                preferredStore: "Food Lion"
            },
            {
                name: "Half n half",
                qty: "1 qt",
                percentUsed: 75,
                preferredStore: "Food Lion"
            },
            {
                name: "Juice",
                qty: "2 gallons",
                percentUsed: 33,
                preferredStore: "Food Lion"
            }
        ]
    },
    {
        id: "5",
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
                percentUsed: 80,
                preferredStore: "Food Lion"
            },
            {
                name: "Black beans",
                qty: "3 cans",
                percentUsed: 50,
                preferredStore: "Food Lion"
            },
            {
                name: "Shredded Cheese",
                qty: "4 1lb bags",
                percentUsed: 100,
                preferredStore: "Food Lion"
            },
            {
                name: "Sour Cream (squeezy)",
                qty: "2 large",
                percentUsed: 80,
                preferredStore: "Food Lion"
            },
            {
                name: "Salsa",
                qty: "4 large jars",
                percentUsed: 10,
                preferredStore: "Food Lion"
            },
            {
                name: "Chips",
                qty: "54 small bags",
                percentUsed: 100,
                preferredStore: "Food Lion"
            },
            {
                name: "Fruit - Watermelon",
                qty: "40 slices",
                percentUsed: 0,
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
                percentUsed: 50,
                preferredStore: "Chick-Fil-A"
            },
            {
                name: "Crock/instant pots",
                qty: "3",
                preferredStore: "Home"
            }
        ]
    },
    {
        id: "6",
        kind: "FoodEvent",
        meal: "Other",
        name: "Cocktail Hour",
        day: "Sunday",
        time: "5p",
        info: [
            "Wear your field day finest, Pitchfork Formal meets Tractor Chic",
            "You could say this is your....Farmal Attire",
            "BYOB!"
        ],
        menu: [],
        items: []
    },
    {
        id: "7",
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
                percentUsed: 80,
                preferredStore: "Food Lion"
            },
            {
                name: "Hot dog buns",
                qty: "40 buns",
                percentUsed: 80,
                preferredStore: "Food Lion"
            },
            {
                name: "Ketchup",
                qty: "1 bottle",
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Mustard",
                qty: "1 bottle",
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Mayo (squeezy)",
                qty: "1 bottle",
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Cheese slice",
                qty: "20 slices",
                percentUsed: 50,
                preferredStore: "Food Lion",
            },
            {
                name: "Hot dog cooking sticks",
                qty: "20 sticks",
                percentUsed: 100,
                preferredStore: "Home",
            },
            {
                name: "Chips",
                qty: "8 large bags",
                percentUsed: 25,
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
                name: "Chili",
                qty: "3 containers",
                percentUsed: 50,
                preferredStore: "Food Lion"
            },
            {
                name: "Slaw",
                qty: "1 container",
                percentUsed: 50,
                preferredStore: "Food Lion"
            },
            {
                name: "Chick-fil-A Chicken Sandwich",
                qty: "20",
                percentUsed: 50,
                preferredStore: "Chick-Fil-A"
            }
        ],
        showDetail: true,
    },
    {
        id: "8",
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
                percentUsed: 80,
                preferredStore: "Food Lion"
            },
            {
                name: "Graham Crackers",
                qty: "2 boxes",
                percentUsed: 80,
                preferredStore: "Food Lion",
            },
            {
                name: "Reese's Peanut Butter Cups",
                qty: "12 chocolates",
                percentUsed: 100,
                preferredStore: "Food Lion"
            },
            {
                name: "Hershey mini chocolate bars",
                qty: "12 bars",
                percentUsed: 80,
                preferredStore: "Food Lion"
            },
            {
                name: "Marshmallow skewers",
                qty: "10+ poles",
                percentUsed: 100,
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
        id: "9",
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
                percentUsed: 50,
                preferredStore: "Food Lion"
            },
            {
                name: "Sausage Patties",
                qty: "40 patties",
                percentUsed: 100,
                preferredStore: "Food Lion"
            },
            {
                name: "Cheese slice",
                qty: "20 slices",
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Eggs",
                qty: "24 eggs",
                percentUsed: 100,
                preferredStore: "Home"
            },
            {
                name: "Coffee",
                qty: "1 lb",
                percentUsed: 50,
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
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Half n half",
                qty: "1 qt",
                percentUsed: 25,
                preferredStore: "Food Lion"
            },
            {
                name: "Juice",
                qty: "2 gallons",
                percentUsed: 25,
                preferredStore: "Food Lion"
            }
        ]
    }
]

export default meals;