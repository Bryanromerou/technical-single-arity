var db = require("./models");
db.user.create({
  firstName: 'Jennifer',
  lastName: 'Garcia',
  age: 34,
  email:'JenniferGarc9012@gmail.com',
  password:'IloveMyDog'
}).then(function(data) {
  // you can now access the newly created task via the variable data
  console.log(data)
});