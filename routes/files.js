var express = require('express');
var connection = require('../dbConnection.js')
var router = express.Router();


/* GET users listing. */
router.get('/', (req,res)=>{
  connection.getConnection((error, tempCont) => {
    if (!!error) {
        tempCont.release();
        console.log('Error in Query');
    } else {
        console.log('Successful Query');

        tempCont.query("SELECT * FROM files", (error, rows, fields) => {
        tempCont.release();
        if (!!error) {
            console.log('Error in the Query')
        } else {
            res.send(rows)
        }
        });   

    };
 })
});
module.exports = router;