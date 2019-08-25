const express = require('express');
const router = express.Router();

const pool = require('../modules/pool')

//   getFeelings = () => {
//     axios
//       .get('/', this.state.feeling)
//       .then(response => {
//         this.props.dispatch({
//           type: "FEELING_WAY",
//           payload: response.data
//         });
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   };


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