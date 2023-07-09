let BASE_URL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit'
let BASE_CAT_URL = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production'
let BASE_FOOD_URL = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill`

let IMAGE = {

    RESTAURANTS:
    {
        SHUBDUM_CHINESE_CORNER: `${BASE_URL}/heuqgfhfysd1eho1iib0`,
        DOMINOS_PIZZA: `${BASE_URL}/aimajvlwqnus1s3h7dy7`,
        MANIS_CAFE: `${BASE_URL}/asfkxu8pkcelux2nkz05`,
        PIZZAHOT: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202256/bhojankaksh/images/restaurant/pizza_hut_xnzjrd.jpg`,
        DOSA1: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202256/bhojankaksh/images/restaurant/dosa_bupmqc.jpg`,
        DOMINOSPIZZA: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202256/bhojankaksh/images/restaurant/domino_s_pizza_ijlhhr.jpg`,
        CURRY: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202256/bhojankaksh/images/restaurant/curry_hasqay.jpg`,
        MEGHANA: `${BASE_FOOD_URL}/vxxpqtjryjhhrpoxt65h`,
        SOUTH_INIDAN_THALI: `${BASE_FOOD_URL}/lzomhmatutqbkk5cqedv`,
    },

    FOODS: {
        VEG_MANCHURIAN_DRY: `${BASE_URL}/f517ba3ce6f35abbd1c0a267b1febaab`,
        PANEER_CHILLI_DRY: `${BASE_URL}/77a5b1e0a89583837febbcbe26892069`,
        CHICKEN_MANCHOW_SOUP: `${BASE_URL}/8b9a47aec594ad1d66081bbe74c41403`,
        MARGHERITA_PIZZA: `${BASE_URL}/hsjncxpojgkyegstpe6i`,
        FRESH_VEGGIE_PIZZA: `${BASE_URL}/q4anya4rfmeqzahtkswl`,
        FARMHOUSE_PIZZA: `${BASE_URL}/dabrjbqcinrnunjbibhq`,
        SHEERA: `${BASE_URL}/xxhjbtqhzzrrzxnrpbws`,
        IDLI: `${BASE_URL}/h5e187dlyxguzindejdv`,
        UPMA: `${BASE_URL}/h3xvytpo4dxkiebnrtfu`,
        PODI_IDLI: `${BASE_URL}/dvqjw4drkaf1s1rk9p7v`,
        PIZZA_DOSA: `${BASE_URL}/qtektkpn0lsqojikqdlq`,
        CHAINESE_WOK: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202255/bhojankaksh/images/foods/chicken2_mhgk5r.webp`,
        PANEER_BIRYANI: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202256/bhojankaksh/images/foods/food3_xejgxj.webp`,
        VEG_BIRYANI: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202255/bhojankaksh/images/foods/food2_ffcofi.jpg`,
        CHICKEN_TIKKA: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202255/bhojankaksh/images/foods/chicken_hssugt.webp`,
        PANEER_TIKKA: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202255/bhojankaksh/images/foods/food1_bmr6j5.webp`,
        CHICKEN_DUM: `https://res.cloudinary.com/dindwsjod/image/upload/v1685202255/bhojankaksh/images/foods/food_knld0q.jpg`,
        BIRYANI: `${BASE_FOOD_URL}/yfyo8aklppbwdplv7ofp`,
        BIRYANI2: `${BASE_FOOD_URL}/n7pn6ilfponvcatp0n73`,
        SOUTH_INIDAN_FOOD1: `${BASE_FOOD_URL}/psnnp9pfztfsubamsgdq`,
        CAKE1: `${BASE_FOOD_URL}/zwv6dwhw82s4u38byk8o`,
        DESSERT1: `${BASE_FOOD_URL}/94cc59f1f6f22bf48ec3fd6770a7ce86`,


    },
    CATEGORIES:
    {
        BIRYANI: `${BASE_CAT_URL}/b4ff78ecc5b8b66f732dd06228916d65`,
        PIZZAS: `${BASE_CAT_URL}/5dd234f7decdac4b4f71a2ff1408e10f`,
        ROLLS: `${BASE_CAT_URL}/3df4fca020027e89b89c733cdffc4966`,
        BURGER: `${BASE_CAT_URL}/e76b511935016406e6ebc11dd7593387`,
        TEA: `${BASE_CAT_URL}/87664acb0f9dd95d10a549bb8190ab27`,
        CHINESE: `${BASE_CAT_URL}/89f3fec702aef5acbb51a6cbc284b3f7`,
        CAKE: `${BASE_CAT_URL}/8322f6d6df488dc1f5a6674cfe863f0f`,
        DESSERT: `${BASE_CAT_URL}/31f03222ea978aef3b10d386729eb076`,
        NORTH_INDIAN: `${BASE_CAT_URL}/c170aa4262ec0d191642f42a3a03b4ce`,
        SOUTH_INIDAN: `${BASE_CAT_URL}/0b5ffa32a04d99c1f212d2aacefd5f6f`,
        SANDWICH: `${BASE_CAT_URL}/36184033ebef97d27a85fa3af5c1d403`,
        ICE_CREAM: `${BASE_CAT_URL}/36184033ebef97d27a85fa3af5c1d403`,
    },


}

export { IMAGE }