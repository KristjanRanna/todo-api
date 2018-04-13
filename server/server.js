var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos})
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});


app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};


// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// var newTodo2 = new Todo({
//   text: 'Lets do something'
// });

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

// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     minLength: 1
//   }
// });
//
// var newUser = new User({
//   email: 'kristjan@gmail.com'
// });
//
// newUser.save().then((userInfo) => {
//   console.log('New user was created', userInfo);
// }).catch((e) => {
//   console.log('Failed to create user', e);
// });
