var express = require('express');
var router = express.Router();
var connection = require('../dbConnection.js')

/* GET home page. */

router.get('/', (req, res) =>{
  connection.query("SELECT * FROM server", (error, rows, fields) => {
    if (!!error) {
        console.log('Error in Query');
    } else {
        console.log('Successful Query');
          var server = rows[0].serverId;

          res.render('index', {
          title: 'Secu Hids Server',
          name: 'This is a name',
          serverId:'This server is number: ' + " " + server
        });

    };
 })
});

module.exports = router;
