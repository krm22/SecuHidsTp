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

        tempCont.query("SELECT * FROM server", (error, rows, fields) => {
        tempCont.release();
        if (!!error) {
            console.log('Error in the Query')
        } else {
            //res.send(rows)
            res.json(rows);
            console.log(rows)
        }
        });   

    };
 })
});
router.get('/1', (req,res)=>{
    connection.getConnection((error, tempCont) => {
      if (!!error) {
          tempCont.release();
          console.log('Error in Query');
      } else {
          console.log('Successful Query');
  
          tempCont.query(" SELECT * FROM server WHERE serverId = '1' ", (error, rows, fields) => {
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
  router.get('/2', (req,res)=>{
    connection.getConnection((error, tempCont) => {
      if (!!error) {
          tempCont.release();
          console.log('Error in Query');
      } else {
          console.log('Successful Query');
  
          tempCont.query(" SELECT * FROM server WHERE serverId = '2' ", (error, rows, fields) => {
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
