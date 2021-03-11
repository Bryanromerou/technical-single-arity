const express = require("express");
const app = express();
const cors = require('cors');

const PORT = 3000;

//middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('<h1>Technical Singularity API</h1>')
});

// Listen For Requests
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));