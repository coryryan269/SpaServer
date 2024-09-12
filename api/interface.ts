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
      let result = await client.query(req.headers.query);
      let queryCommand = result.queryCommand;
      // switch (queryCommand) {
      //   case "requestToken":
      //     requestToken(result);
      //     break;
      //   case "editCustomer":
      //     // Code to execute if expression equals value2
      //     break;   
      
      //   // ... more cases
      //   default:
      //     // Code to execute if expression doesn't match any case   
      
      // }
      
      res.send(result.rows);
      client.release();
      return result;
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// BASIC QUERY FUNCTION
async function executeQuery(exQuery) {
    try {
        const client = await pool.connect();
        const result = await client.query(exQuery);
        client.release();
        console.log("\n\n QUERY: " + exQuery);
        return (JSON.stringify(result));
    } catch (err) {
        console.error(err);
        return ("there was an error executing your query");
    }
}


function requestToken(result){
    
}