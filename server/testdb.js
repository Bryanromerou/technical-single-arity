var db = require("./models");
db.user.create({
  firstName: 'Brian',
  lastName: 'Hague',
  age: 34,
  email:'BrianHague@gmail.com',
  password:'LifeIsGreat123'
}).then(function(data) {
  // you can now access the newly created task via the variable data
  console.log(data)
});