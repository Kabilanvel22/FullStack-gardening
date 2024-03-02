import { configureStore, createSlice } from '@reduxjs/toolkit';


const featuredProductsSlice = createSlice({
    name: 'featureProduct',
  initialState: {
    products: [
      {
        id: 1,
        name: 'chilli',
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/20190315_150918/064994908fb5e4037537697c91f1d680.jpg',
        detail:"Chili, also known as chili pepper or chile, is a type of fruit that belongs to the Capsicum genus. It is a popular spice used in cuisines around the world, known for its distinctive spicy flavor. Chili peppers vary widely in size, color, shape, and level of spiciness, with some varieties being mild and others extremely hot.",
        path:"/p1"
      },
      {
        id: 2,
        name: "Bringal",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20191223_214110_534/2f43901ed0d6e83456cf3d07ffe7ee7e.jpg',
        detail:"Eggplant, also known as aubergine in some regions, is a versatile and popular vegetable widely used in various cuisines around the world. It belongs to the nightshade family and is known for its distinctive purple, glossy skin and soft, creamy flesh.",
        path:"/p2"
      },
      {
        id: 3,
        name: "Zuccini",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20210120_212242_071/3dca7759ccf1972ff517cdefc14f60f5.jpg',
        detail:"Zucchini, also known as courgette in some regions, is a popular summer squash that belongs to the gourd family. It is characterized by its cylindrical shape, smooth dark green skin, and tender, mild-flavored flesh.",
        path:"/p3",
      },
      {
        id: 4,
        name: "Pumpkin",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/pumpkin_3/075d64a5f26d7ab67d2467369a803a21.jpg',
        detail:"Pumpkin is a versatile and nutritious winter squash known for its vibrant orange color, sweet flavor, and dense, fibrous flesh. It belongs to the gourd family and is a staple in many cuisines around the world.",
        path:"/p4"
      },
      {
        id: 5,
        name: "Tomato",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSqmd_FZ7BAYiRYeHGdK1oN8lE2_6Sg0mnAmvRzBA6EstLFIGv76vnZ5WmvABvzv_7EgM&usqp=CAU',
        detail:"Tomato is a widely cultivated and incredibly versatile fruit that is commonly mistaken for a vegetable in culinary applications. It belongs to the nightshade family and is known for its bright red or yellowish skin, juicy flesh, and distinct sweet-tangy flavor.",
        path:"/p5"
      },
      {
        id: 6,
        name: "Onion",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/bunch-of-onions-from-the-garden-after-recently-royalty-free-image-1683747767.jpg?crop=1.00xw:0.939xh;0,0.0359xh&resize=980:*',
        detail:"Onion is a fundamental vegetable in many cuisines worldwide, known for its distinctive pungent aroma and flavor. It belongs to the genus Allium, which also includes garlic, leeks, and chives. Onions are a bulbous plant, and they are grown in a variety of sizes, shapes, and colors, including white, yellow, and red.",
        path:"/p6"
      },
      {
        id: 7,
        name: "Apple",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://urbanplants.co.in/cdn/shop/products/abhishek-s-kumar-fruit-plant-thai-red-water-apple-plant-38659858792663.jpg?v=1672517326',
        detail:"Apple is a widely adored fruit known for its crisp texture, sweet-tart flavor, and remarkable versatility. It belongs to the Rosaceae family and is one of the most commonly consumed fruits globally.",
        path:"/p8"
      },
      {
        id: 8,
        name: "Rose",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://assets-news.housing.com/news/wp-content/uploads/2022/10/18145120/Rose-flower-30-images-and-over-20-interesting-facts.jpg',
        detail:"The rose, scientifically known as Rosa, is a perennial flowering plant celebrated for its exceptional beauty, enchanting fragrance, and profound cultural significance. Belonging to the Rosaceae family, roses are among the most cherished and widely cultivated flowers globally.",
        path:"/p9"
      },
      {
        id: 9,
        name: "Sunflower",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://rukminim1.flixcart.com/image/850/1000/xif0q/plant-sapling/d/p/s/annual-yes-yes-sunflower-006-1-pot-sunlight-original-imagkhzfmggv6dct.jpeg?q=90',
        path:"/p10",
        detail:"The sunflower, scientifically known as Helianthus annuus, is a striking and iconic flowering plant known for its large, vibrant flower head and its association with sunshine and positivity. It belongs to the Asteraceae family and is native to North America, though it is now cultivated globally for its ornamental beauty and its seeds."
      },
      {
        id: 10,
        name: "Dhalia",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://rukminim2.flixcart.com/image/850/1000/jvcp9jk0/plant-seed/x/f/z/10-dahlia-mixed-seed-bio-kisan-original-imafywtrrcffj3ft.jpeg?q=90',
        path:"/p11",
        detail:"The dahlia, scientifically known as Dahlia spp., is a dazzling and diverse flowering plant prized for its vibrant, intricate blooms. It belongs to the Asteraceae family, which also includes daisies and sunflowers. Dahlias are native to Mexico and Central America but are now cultivated worldwide for their ornamental value."
      },
      {
        id: 11,
        name: "Grapes",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://5.imimg.com/data5/LO/NV/RJ/SELLER-53524300/grapes-fruit-plant.jpg',
        detail:"Grapes are succulent, vine-growing fruits that belong to the genus Vitis. They are known for their small, round or oval shape and are typically clustered in bunches on the vine. Grapes are valued for their sweet, juicy flavor and are cultivated in vineyards around the world.",
        path:"/p7"
      },
      {
        id: 12,
        name: "Hibiscus",
        description: 'Plant Detaile View here......',
        imageUrl: 'https://nurserylive.com/cdn/shop/products/nurserylive-g-hibiscus-gudhal-flower-red-plant-213118.jpg?v=1679750250',
        path:"/p12",
        detail:"Hibiscus, scientifically known as Hibiscus rosa-sinensis, is a tropical flowering plant renowned for its vibrant, trumpet-shaped blossoms and lush, dark green foliage. It belongs to the Malvaceae family and is native to warm climates in Asia, particularly China and India."
      },
    ],
  },
  reducers: {},
});
export default featuredProductsSlice;