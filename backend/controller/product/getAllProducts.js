const productModel = require("../../models/productModel.js");

const getAllProductsController = async (req, res) => {
    try {
        const data = await productModel.find({})
        res.send(JSON.stringify(data))
    } catch(err) {
        console.log(err.message);
    }
}

module.exports = getAllProductsController;