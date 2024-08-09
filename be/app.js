const express = require('express');
const app = express();
require('./db/connection');
const port = process.env.PORT || 3000;
const userRouter = require('./routes/userRouter');

app.use(express.json());

app.use('/users', userRouter);
app.use('/', (req, res) => res.status(404).json('No route for this path'));

app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});
