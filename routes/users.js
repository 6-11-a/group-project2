const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = mongoose.model('User');

// SIGNUP
router.post('/signup', ((req, res) => {
  let newUser = new User();
  newUser.email = req.body.userEmail;
  newUser.setPassword(req.body.userPassword);
  newUser.save((err, userInfo) => {
    if(err) {
      res.sendStatus(500)
    } else {
      res.json({token: newUser.generateJWT()})
    }
  })
}))

module.exports = router;