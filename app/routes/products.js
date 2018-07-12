const express      = require('express');
const mongoose     = require('mongoose');
const router       = express.Router();

const productData = [
    {
        name: "Mrs. Meyer's Clean Day Multi-Surface Everyday Cleaner",
        image: "https://images-na.ssl-images-amazon.com/images/I/91G7wJCFXFL.jpg",
        desc: "Lemon Verbena, 16 fl oz, 3 ct",
        price: 10.99
    },
    {
        name: "Puracy Natural All Purpose Cleaner",
        image: "https://images-na.ssl-images-amazon.com/images/I/71Iq0bRxISL.jpg",
        desc: "Best Household Multi-Surface Spray, Streak Free on Glass and Stainless Steel, Child and Pet Safe, Green Tea and Lime, 25 Ounce Bottle, (Pack of 2)",
        price: 13.99
    },
    {
        name: "Better Life Natural All-Purpose Cleaner",
        image: "https://images-na.ssl-images-amazon.com/images/I/81puKeVAFnL.jpg",
        desc: "Safe Around Kids & Pets, Unscented, 32 Ounces (Pack of 2)",
        price: 12.18
    },
    {
        name: "Mrs. Meyers Clean Day Orange Clove Kitchen Basics Set",
        image: "https://images-na.ssl-images-amazon.com/images/I/51YCIGwPT2L.jpg",
        desc: "Ingredients are at least 97% naturally derived. Set contains Liquid Dish Soap (16 fl.oz.), Liquid Hand Soap (12.5 fl.oz) & Multi Surface Spray (16 fl.oz.)",
        price: 27.99
    },
    {
        name: "Puracy Natural Home & Kitchen Cleaning Set",
        image: "https://images-na.ssl-images-amazon.com/images/I/71rnIFSuEWL.jpg",
        desc: "5-PIECE SET INCLUDES: Lavender & Vanilla Hand Soap, Green Tea & Lime Dish Soap, Free & Clear Liquid Laundry Detergent, Green Tea & Lime Multi-Surface Cleaner, Free & Clear Laundry Stain Remover",
        price: 37.99
    },
    {
        name: "Better Life Natural Plant Based Best Hardwood Floor Cleaner",
        image: "https://images-na.ssl-images-amazon.com/images/I/71Iq0bRxISL.jpg",
        desc: "Safely cleans and restores a brilliant shine to: hardwood, ceramic tile, stone, bamboo, vinyl, laminate, and other sealed floors. Citrus Mint, 32 Ounces (Pack of 2)",
        price: 16.29
    },
    {
        name: "Seventh Generation Disinfecting Multi-Surface Wipes",
        image: "https://images-na.ssl-images-amazon.com/images/I/61a0dcwRl3L.jpg",
        desc: "Convenient wipes for daily touch-ups and tough cleaning jobs, clean and disinfect in one easy step. Lemongrass Citrus, 70 count Tubs (Pack of 6)",
        price: 29.94
    },
    {
        name: "Seventh Generation Concentrated Laundry Detergent",
        image: "https://images-na.ssl-images-amazon.com/images/I/714%2BscUuKCL.jpg",
        desc: "Powerful triple-enzyme formula fights tough stains. Free and Clear Unscented, 106 loads, 40 oz, (Pack of 2)",
        price: 25.99
    }
]

router.get("/", (req, res) => {
    res.send(productData);
});

module.exports = router;
