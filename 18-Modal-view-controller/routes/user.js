const express = require('express');
const Users = require('../models/user');
const { handleGetAllUsers, handleGetUserById, handleCreateNewUser, handleDeleteUserById, handleUpdateUserById } = require('../controllers');
const router = express.Router()


// Routes

// all users with mongoose
router.get("/", handleGetAllUsers)
// router.get("/", async (req, res) => {
//     const allDbUsers = await Users.find({})
//     return res.json(allDbUsers)

//     // res.setHeader('myName', "sam")
//     // return res.json(users)
// })

// users with id IN mongoose
router.get("/:ID",handleGetUserById)
// router.get("/:ID", async (req, res) => {

//     const user = await User.findById(req.params.ID)
//     if (!user) return res.status(404).json({ msg: "No User Found" })
//     return res.json(user)
// })

// post with mongoose
router.post("/", handleCreateNewUser)
// router.post("/", async (req, res) => {
//     const body = req.body;

//     if (
//         !body ||
//         !body.firstName ||
//         !body.lastName ||
//         !body.email ||
//         !body.gender
//     ) {
//         return res.status(400).json({ msg: "All field are required" });
//     }

//     const result = await User.create({
//         firstName: body.firstName,
//         lastName: body.lastName,
//         email: body.email,
//         gender: body.gender
//     })
//     console.log(result);

//     return res.status(201).json({ msg: "Sucess" })


// })



router.delete("/:ID", handleDeleteUserById)
// router.delete("/:ID", async (req, res) => {
//     const user = await Users.findByIdAndDelete(req.params.ID)
//     const allDbUsers = await User.find({})
//     return res.json(allDbUsers)
// })

router.patch("/:ID", handleUpdateUserById)
// router.patch("/:ID", async (req, res) => {
//     const body = req.body;
//     const user = await User.findByIdAndUpdate(req.params.ID, {
//         firstName: body.firstName,
//         lastName: body.lastName,
//         email: body.email,
//         gender: body.gender
//     })
//     const allDbUsers = await User.find({})

//     return res.json(allDbUsers)



//     // const upd = users.findIndex((user => user.id === ID))
//     // users[upd] = { id: ID, ...req.body };
//     // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
//     //     return res.json(users)
//     // })
// })

module.exports = router;