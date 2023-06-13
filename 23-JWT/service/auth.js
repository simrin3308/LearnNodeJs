const jwt = require('jsonwebtoken');
const secret = "qwerty"

// this function will create the tokens 
function setUser(user) {
  // now we will create tokens for user
  // first we will create payload 

  const payload = {
    _id: user._id,
    email: user.email
  }
  return jwt.sign(payload, secret)
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret)
}

module.exports = {
  setUser,
  getUser,
};