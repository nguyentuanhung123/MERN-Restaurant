const userModel = require("../../models/userModel.js")

const userSignInController = async (req, res) => {
    try {
        // console.log(req.body)
        const { email } = req.body;

        const user = await userModel.findOne({email: email})
        if(user) {
            // console.log(user);
            const dataSend = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                image: user.image
            }
            res.send({
                message: "Login is successfully",
                data: dataSend,
                success: true,
            })
        } else {
            res.send({
                message: "Email is not available, please sign up",
                success: false,
            })
        }

    } catch(err) {
        console.log(err.message)
    }
}

module.exports = userSignInController;