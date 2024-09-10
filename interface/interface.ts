"use strict"
const { Pool } = require('pg');
const path = require('path');
const express = require('express');
const app = express();
const port = 5433; // For requests directed to this server
const modTable = require("../utils/index.ts"); // modTable provides query strings

// const CryptoJS = require("crypto-js")
app.use(express.static('public'));
const pool = new Pool({
    connectionString: 'postgres://postgres:Redbull1!n@localhost:5432/spaserver'
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// QUERY TEMPLATE
app.get('/query', async (req, res) => {
  try {
      const client = await pool.connect();
      let result = await client.query(req);
      res.send(result.rows);
      client.release();
      return result;
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// BASIC QUERY FUNCTION
async function executeQuery(query) {
    try {
        const client = await pool.connect();
        const result = await client.query(query);
        client.release();
        console.log("\n\n QUERY: " + query);
        return (JSON.stringify(result));
    } catch (err) {
        console.error(err);
        return ("there was an error executing your query");
    }
}

// console.log(modTable.modEmployee.yoyoyo);
executeQuery(modTable.modEmployee.editEmployee({employee_id: 121,firstname:'Killian', lastname: 'Jones'})).then( res => {
    console.log(res);
});

// executeQuery("select employeepassword from employees where employee_id = 21;").then( res => {
//     console.log(res);
// });
// console.log(modTable.modEmployee.findEmployee({firstname:'cory', lastname: 'anders'}));
// executeQuery('select * from employees').then(result => {console.log((result));})