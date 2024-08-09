const express = require('express');
const User = require('../models/users');
const router = express.Router();

router
  .route('/')
  /* GET /users */
  .get(async (req, res) => {
    const users = await User.findAll({});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(users);
  })
  /* POST /users */
  .post(async (req, res) => {
    const newUser = await User.create(req.body);
    res.statusCode = 201;
    res.setHeader('Content-Type', 'application/json');
    res.json(newUser);
  });

router
  .route('/:id')
  /* GET /users/:id */
  .get(async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(user);
    } else {
      res.statusCode = 404;
      res.send('ID not found');
    }
  })
  /* PUT /users/:id */
  .put((req, res) => {
    res.statusCode = 405;
    res.end('PUT operation not implemented.');
  });
module.exports = router;
