const userModel = require("../../models/userModel.js")

const userSignUpController = async (req, res) => {
    console.log(req.body);
    const {email} = req.body;

    const user = await userModel.findOne({email})

    if(user) {
        res.send({
            message: "Email id is already register",
            success: false
        })
    } else {
        const data = new userModel(req.body)
        const save = data.save()
        res.send({
            message: "Successfully sign up",
            success: true
        })
    }
}

module.exports = userSignUpController;