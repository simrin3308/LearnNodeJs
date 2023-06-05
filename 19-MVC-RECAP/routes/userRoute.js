const express = require('express')
const User = require('../models/userModels')
const { handleGetAllUsers, handleGetUserById, handleCreateNewUser, handleDeleteUserById,handleUpdateUserById  } = require('../controller/controller')
const router = express.Router()

// showAllUsers
router.get("/", handleGetAllUsers)
router.post("/", handleCreateNewUser)
router.get("/:id", handleGetUserById)
router.delete("/:id", handleDeleteUserById)
router.patch("/:id", handleUpdateUserById)
module.exports = router;