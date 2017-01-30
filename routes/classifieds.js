
'use strict';

const express = require('express');
const knex = require('../knex');
const router = express.Router();

router.get('/', (req, res, next)=>{
  knex('classifieds')
    .select('id', 'title', 'description', 'price', 'item_image')
    .orderBy('id', 'asc')
    .then((results)=>{
      res.json(results);
    })
    .catch((err)=>{
      res.send(err)
    })
})

  router.get('/:id', (req, res, next)=>{
    knex('classifieds')
      .select('id', 'title', 'description', 'price', 'item_image')
      .where({'id': req.params.id})
      .then((results)=>{
        res.json(results[0]);
      })
      .catch((err)=>{
        res.send(err)
      })
  });

module.exports = router;
