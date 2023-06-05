const Users = require("../models/userModels")


const handleGetAllUsers = async (req, res) => {
    const allDbUsers = await Users.find({})
    return res.json(allDbUsers)
}


const handleGetUserById = async (req, res) => {
    const userId = await Users.findById(req.params.id)
    return res.json(userId)
}

const handleCreateNewUser = async (req, res) => {
    const body = req.body;
    const newUser = await Users.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })
    console.log(newUser);
    return res.status(201).json({ msg: 'created' })
}

const handleDeleteUserById = async (req, res) => {
    const userId = await Users.findByIdAndDelete(req.params.id)
    const allDbUsers = await Users.find({})
    return res.json(allDbUsers)
}
const handleUpdateUserById = async (req, res) => {
    const body = req.body;
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender
    })
    console.log(updatedUser);
    const allDbUsers = await Users.find({})
    return res.json(allDbUsers)
}


module.exports = { handleGetAllUsers, handleGetUserById, handleCreateNewUser, handleDeleteUserById, handleUpdateUserById }