const User = require("../models/userModels");
const {v4: uuidv4} = require('uuid');
const { setUser } = require("../service/auth");





async function handleUserSignUp(req, res) {
    const { name, password, email } = req.body;
    await User.create({
        name,
        email,
        password,
    })
    return res.redirect("/")
}

async function handleUserLogin(req, res) {
    const { password, email } = req.body;
    const user = await User.findOne({ email, password })
    if (!user) return res.render('login',
        { error: 'Invalid username or password.' })

    
    const token = setUser(user);
    res.cookie('uid', token)
    return res.redirect("/")
}
module.exports = {
    handleUserSignUp,
    handleUserLogin
}