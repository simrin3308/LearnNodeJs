const User = require("../models/user")



const handleGetAllUsers = async (req, res) => {
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)

    // res.setHeader('myName', "sam")
    // return res.json(users)
}

const handleGetUserById = async (req, res) => {

    const user = await User.findById(req.params.ID)
    if (!user) return res.status(404).json({ msg: "No User Found" })
    return res.json(user)
}

const handleDeleteUserById = async (req, res) => {
    const user = await Users.findByIdAndDelete(req.params.ID)
    const allDbUsers = await User.find({})
    return res.json(allDbUsers)
}

const handleUpdateUserById = async (req, res) => {
    const body = req.body;
    const user = await User.findByIdAndUpdate(req.params.ID, {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })
    const allDbUsers = await User.find({})

    return res.json(allDbUsers)

}

const handleCreateNewUser = async (req, res) => {
    const body = req.body;

    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender
    ) {
        return res.status(400).json({ msg: "All field are required" });
    }

    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })
    console.log(result);

    return res.status(201).json({ msg: "Sucess" })
}

module.exports = { handleGetAllUsers, handleGetUserById, handleCreateNewUser, handleDeleteUserById, handleUpdateUserById }