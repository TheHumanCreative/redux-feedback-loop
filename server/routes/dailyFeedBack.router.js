const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  pool.query('SELECT * FROM "prime_feedback" ORDER BY "id" DESC;').then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('error in GET', error);
    res.sendStatus(500);
  });
})

router.post('/', (req, res) => {
  let newFeedBack = req.body;
  console.log('adding the new feedback', newFeedBack);
  

  let queryText = `INSERT INTO "prime_feedback" ("feeling", "understanding", "support", "comments", "review")
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

router.delete('/:id', (req, res) => {
  let newDeleteFeedItem = req.params.id
  let queryText = `DELETE FROM "prime_feedback" WHERE id=$1`;
  console.log("deleting the old feedback:", newDeleteFeedItem);
  
  pool
    .query(queryText, [newDeleteFeedItem])
    .then(result => {
      console.log("in DELETE router:", result);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("Error DELETE", error);
      res.sendStatus(500);
    });
});
    
module.exports = router;