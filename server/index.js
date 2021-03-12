const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const PORT = 3000;
const routes = require('./routes');

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Technical Singularity API</h1>')
});
app.use('/api/v1/users', routes.users);

// Listen For Requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));