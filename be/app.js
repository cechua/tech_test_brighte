const express = require('express');
var cors = require('cors');
const app = express();
require('./db/connection');
const port = process.env.PORT || 3000;
const userRouter = require('./routes/userRouter');

var corsOptions = {
  origin: 'http://localhost:5173', //change to fe origin url or fe port is changed for dev
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRouter);
app.use('/', (req, res) => res.status(404).json('No route for this path'));

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
