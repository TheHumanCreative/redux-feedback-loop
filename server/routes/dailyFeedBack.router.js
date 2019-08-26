const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  pool.query('SELECT * FROM "feedback";').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in GET', error);
    res.sendStatus(500);
  });
})

router.post('/', (req, res) => {
  let newFeedBack = req.body;
  console.log('adding the new feedback', newFeedBack);
  

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "review")
VALUES ($1, $2, $3, $4, $5);`;
  pool.query(queryText, [newFeedBack.feeling, newFeedBack.understanding, newFeedBack.support, newFeedBack.comments, newFeedBack.review])
  .then(results => {
    res.sendStatus(201)
  })
  .catch( error => {
    console.log('error adding POST', error);
    res.sendStatus(500);
  })
})
    
module.exports = router;