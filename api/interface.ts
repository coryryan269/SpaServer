"use strict"
const { Pool } = require('pg');
const path = require('path');
const express = require('express');
const app = express();
const port = 5433; // For requests directed to this server
const modTable = require("../utils/index.ts"); // modTable provides query strings
const CryptoJS = require('crypto-js');


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
      switch (queryCommand) {
        case "requestToken":
        //   requestToken(result);
          break;
        case "editCustomer":
          // Code to execute if expression equals value2
          break;   
        case "addCustomer":
        // Code to execute if expression equals value2
        break; 
        case "editEmployee":
        // Code to execute if expression equals value2
        break; 
        case "addEmployee":
        // Code to execute if expression equals value2
        break; 
        case "editEmployeeSchedule":
        // Code to execute if expression equals value2
        break; 
        case "editCustomer":
        // Code to execute if expression equals value2
        break; 
        // ... more cases
        default:
          // Code to execute if expression doesn't match any case   
      
      }
      
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
        // console.log(result);
        return ((result));
    } catch (err) {
        console.error(err);
        return ("there was an error executing your query");
    }
}


function decryptData(dataToDecrypt){
    // Assuming you have the private key in base64 format
  const privateKeyBase64 = "YOUR_PRIVATE_KEY_IN_BASE64";

  // Convert the base64 private key to a CryptoJS.RSAKey object
  const privateKey = CryptoJS.RSA.importPrivateKey(privateKeyBase64, { format: CryptoJS.format.OpenSSL });

  // Decrypt the data
  const decryptedData = CryptoJS.RSA.decrypt(dataToDecrypt, privateKey, { format: CryptoJS.format.OpenSSL });

  console.log("Decrypted data:", decryptedData.toString());
}


function generateRandom50DigitNumber() {
  const digits = [];
  for (let i = 0; i < 50; i++) {
    digits.push(Math.floor(Math.random() * 10));
  }
  return digits.join('');
}

async function requestAuthTokenEmployee(username, password){
  let result2 = await executeQuery("select password from employees where username = '" + username + "';");
  let pw = (result2['rows'][0].password); 
  if (pw == password)
    {result2 =  "54321"} 
  else 
    result2 = false;
  // console.log(result2);
  return result2;
}

// requestAuthTokenEmployee('coryryan269','mypasss').then((result) => {console.log(result)});
// console.log("testing");

console.log(generateRandom50DigitNumber());


