require('dotenv').config();
const productData = require('./data/products')
const connectDB = require('./config/db');
const Product = require('./models/Products');
connectDB();
const importData=async()=>{
    try {
        await Product.deleteMany({});
        await Product.insertMany(productData);
        console.log('====================================');
        console.log("Data Import Success");
        console.log('====================================');
        process.exit();
    } catch (error) {
        console.error("Erreur d'importation des données");
        process.exit(1);
    }
};
importData();