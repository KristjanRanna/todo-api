var mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  }
});

var newUser = new User({
  email: 'kristjan@gmail.com'
});

newUser.save().then((userInfo) => {
  console.log('New user was created', userInfo);
}).catch((e) => {
  console.log('Failed to create user', e);
});

module.exports = {User};
