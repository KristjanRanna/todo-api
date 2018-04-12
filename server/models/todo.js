var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }).catch((e) => {
//   console.log('Unable to save todo');
// });

// newTodo2.save().then((doc) => {
//   console.log('Saved todo again', doc);
// }).catch((e) => {
//   console.log('Unable to save todo')
// });

// var newTodo2 = new Todo({
//   text: 'Lets do something'
// });

module.exports = {Todo};
