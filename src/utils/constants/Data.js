import { rw } from "../Dimension"
import { AntDesign } from "../icons/VectorIcon"
import { COLORS } from "./Colors"
import { IMAGE } from "./Image"
import { ROUTE } from "./Route"

let RESTAURANT = [
    { id: 1, title: "Shubdum Chinese Corner", imgSrc: IMAGE.RESTAURANTS.SHUBDUM_CHINESE_CORNER, desc: `Chinese, North Indian`, location: 'Mumbai', distance: 4.0, rating: 4.5 },
    { id: 2, title: "Domino's Pizza", imgSrc: IMAGE.RESTAURANTS.DOMINOSPIZZA, desc: `Pizzas, Italian`, location: 'Mulund East', distance: 1.0, rating: 4.5 },
    { id: 3, title: "Mani's Cafe", imgSrc: IMAGE.RESTAURANTS.MANIS_CAFE, desc: `Indian`, location: 'Mulund East', distance: 300, rating: 4.5 },
    // { id: 1, title: "Manni's Cafe", imgSrc: IMAGE.RESTAURANTS.WHITEDOSA, desc: `Idli, Mendu wada, Maisuri - South Indian` }, 
]

let FOOD = [
    { id: 1, title: "veg manchurian dry", price: 129, imgSrc: IMAGE.FOODS.VEG_MANCHURIAN_DRY, desc: "", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },
    { id: 2, title: "paneer chilli dry", price: 89, imgSrc: IMAGE.FOODS.PANEER_CHILLI_DRY, desc: "Serves 1-2", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },
    { id: 3, title: "chicken manchow soup", price: 69, imgSrc: IMAGE.FOODS.CHICKEN_MANCHOW_SOUP, desc: "Serves 1-2", restaurant: { id: 1, restaurantName: "Shubdum Chinese Corner" } },

    { id: 4, title: "Margherita Pizza", price: 120, imgSrc: IMAGE.FOODS.MARGHERITA_PIZZA, desc: "Classic delight with 100% real mozzarella cheese. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },
    { id: 5, title: "Fresh Veggie Pizza", price: 130, imgSrc: IMAGE.FOODS.FRESH_VEGGIE_PIZZA, desc: "Delectable combination of onion & capsicum, a veggie lovers pick", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },
    { id: 6, title: "Farmhouse Pizza", price: 140, imgSrc: IMAGE.FOODS.FARMHOUSE_PIZZA, desc: "Delightful combination of onion, capsicum, tomato & grilled mushroom. Available in Cheese Burst, Wheat Thin Crust and Pan Crust options.", restaurant: { id: 2, restaurantName: "Domino's Pizza" } },


    { id: 7, title: "Sheera", price: 50, imgSrc: IMAGE.FOODS.SHEERA, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 8, title: "Idli ", price: 30, imgSrc: IMAGE.FOODS.IDLI, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 9, title: "Upma", price: 35, imgSrc: IMAGE.FOODS.UPMA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 10, title: "Podi Idli", price: 35, imgSrc: IMAGE.FOODS.PODI_IDLI, desc: "Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },
    { id: 11, title: "Pizza Dosa", price: 90, imgSrc: IMAGE.FOODS.PIZZA_DOSA, desc: "Medium Spicy | Serves 1", restaurant: { id: 3, restaurantName: "Mani's Cafe" } },

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

let ORDERS = [
    { id: 1, status: 'Ordered', preview: "Arriving by april 26", total: 10 },
    { id: 2, status: 'Delivered', preview: "Arriving by May 20", total: 5 },
    { id: 3, status: 'Arriving Today', preview: "Arriving by Jun 12", total: 9 },
    { id: 4, status: 'Cancelled', preview: "Cancelled on July 25", total: 2 },
    { id: 5, status: 'Delivered', preview: "Arriving by May 20", total: 5 },
    { id: 6, status: 'Arriving Today', preview: "Arriving by Jun 12", total: 9 },
    { id: 7, status: 'Cancelled', preview: "Cancelled on July 25", total: 2 },
];

let ORDERS_LINKS = [
    { id: 1, title: 'My Orders', navigateTo: ROUTE.ORDERS, icon: <AntDesign name="profile" size={rw(6)} color={COLORS.LIGHT_BLUE} /> },
    { id: 2, title: 'Delivery Address', navigateTo: ROUTE.ADDRESS, icon: <AntDesign name="fork" size={rw(6)} color={COLORS.LIGHT_BLUE} /> },
    { id: 3, title: 'Sign Out', navigateTo: "", icon: <AntDesign name="logout" size={rw(6)} color={COLORS.LIGHT_BLUE} /> },
]

let CATEGORY = [
    { id: 1, title: 'Biryani', navigateTo: "", imgSrc: IMAGE.CATEGORIES.BIRYANI, },
    { id: 2, title: 'Pizza', navigateTo: "", imgSrc: IMAGE.CATEGORIES.PIZZAS, },
    { id: 3, title: 'South Indian', navigateTo: "", imgSrc: IMAGE.CATEGORIES.SOUTH_INIDAN, },
    { id: 4, title: 'Burger', navigateTo: "", imgSrc: IMAGE.CATEGORIES.BURGER, },
    { id: 5, title: 'Chinese', navigateTo: "", imgSrc: IMAGE.CATEGORIES.CHINESE, },
    { id: 6, title: 'Cake', navigateTo: "", imgSrc: IMAGE.CATEGORIES.CAKE, },
    { id: 7, title: 'Dessert', navigateTo: "", imgSrc: IMAGE.CATEGORIES.DESSERT, },
    { id: 8, title: 'North Indian', navigateTo: "", imgSrc: IMAGE.CATEGORIES.NORTH_INDIAN, },
    { id: 9, title: 'Sandwich', navigateTo: "", imgSrc: IMAGE.CATEGORIES.SANDWICH, },
]


export { RESTAURANT, FOOD, CATEGORY, SORTING, ADDRESS, PAYMENT, ORDERS, ORDERS_LINKS }