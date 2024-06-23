const productModel = require("../../models/productModel.js");

const uploadProductController = async (req, res) => {
    try {
        // console.log(req.body);
        const data = await productModel(req.body)
        const datasave = await data.save();
        res.send({
            message: "Upload successfully"
        })
    } catch(err) {
        console.log(err.message);
    }
}

module.exports = uploadProductController;