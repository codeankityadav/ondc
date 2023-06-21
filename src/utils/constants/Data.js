import { IMAGE } from "./Image"

let RESTAURANT = [
    { id: 1, title: "Shubdum Chinese Corner", imgSrc: IMAGE.RESTAURANTS.SHUBDUM_CHINESE_CORNER, desc: `Chinese, North Indian`, location: 'Mumbai', distance: 4.0,rating : 4.5 },
    { id: 2, title: "Domino's Pizza", imgSrc: IMAGE.RESTAURANTS.DOMINOSPIZZA, desc: `Pizzas, Italian`, location: 'Mulund East', distance: 1.0,rating : 4.5 },
    { id: 3, title: "Mani's Cafe", imgSrc: IMAGE.RESTAURANTS.MANIS_CAFE, desc: `Indian`, location: 'Mulund East', distance: 300,rating : 4.5 },
    // { id: 1, title: "Manni's Cafe", imgSrc: IMAGE.RESTAURANTS.WHITEDOSA, desc: `Idli, Mendu wada, Maisuri - South Indian` }, 
]

let FOOD = [
    { id: 1, title: "veg manchurian dry", price: 500, imgSrc: IMAGE.FOODS.VEG_MANCHURIAN_DRY, desc: "", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },
    { id: 2, title: "paneer chilli dry", price: 159, imgSrc: IMAGE.FOODS.PANEER_CHILLI_DRY, desc: "Serves 1-2", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },
    { id: 3, title: "chicken manchow soup", price: 119, imgSrc: IMAGE.FOODS.CHICKEN_MANCHOW_SOUP, desc: "Serves 1-2", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },

    { id: 4, title: "Margherita Pizza", price: 314, imgSrc: IMAGE.FOODS.MARGHERITA_PIZZA, desc: "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },
    { id: 5, title: "Fresh Veggie Pizza", price: 454, imgSrc: IMAGE.FOODS.FRESH_VEGGIE_PIZZA, desc: "Delectable combination of onion & capsicum, a veggie lovers pick", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },
    { id: 6, title: "Farmhouse Pizza", price: 544, imgSrc: IMAGE.FOODS.FARMHOUSE_PIZZA, desc: "Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },


    { id: 7, title: "Sheera", price: 50, imgSrc: IMAGE.FOODS.SHEERA, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 8, title: "Idli ", price: 50, imgSrc: IMAGE.FOODS.IDLI, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 9, title: "Upma", price: 50, imgSrc: IMAGE.FOODS.UPMA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 10, title: "Podi Idli", price: 80, imgSrc: IMAGE.FOODS.PODI_IDLI, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 11, title: "Pizza Dosa", price: 100, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },

]

let CATEGORY = [
    // { id: 5, title: "Pizza", imgSrc: IMAGE. }
]


let SORTING = [
    { id: 1, title: "Sort" }
]


let ADDRESS = [
    // {
    //     id: 1,
    //     title: 'Add New',
    //     icon: 'map-marker-radius-outline',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },
    // {
    //     id: 2,
    //     title: 'Office',
    //     icon: 'office-building-marker',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },
    // {
    //     id: 3,
    //     title: 'Use current location',
    //     icon: 'map-marker-circle',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },
    // {
    //     id: 4,
    //     title: 'hotel',
    //     icon: 'home-city-outline',
    //     location: `Clover Infotech, B-702 Floor, Reliable Tech Part,Reliable Tech Park, Thane - Belapur road, Gavate Wadi`
    // },

]


let PAYMENT = [
    {
        id: 1,
        title: "MRP Total",
        price: "₹250.00"
    }
]


export { RESTAURANT, FOOD, CATEGORY, SORTING, ADDRESS, PAYMENT }