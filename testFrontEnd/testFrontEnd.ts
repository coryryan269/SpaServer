"use strict"
const express = require('express');
const app = express();
const path = require('path');
const port = 5434; // For requests directed to this server
const modTable = require("../utils/index.ts"); // modTable provides query strings


app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


// LOGIN PAGE
app.get('/', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,'./public/loginPage/login.html'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Portal PAGE
app.get('/testFrontEnd.html', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,'./public/employeePortal/testFrontEnd.html'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Portal PAGE CSS
app.get('/testFrontEnd.css', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,'./public/employeePortal/testFrontEnd.css'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Portal PAGE TS
app.get('/testFrontEnd.js', async (req, res) => {
  try {
      res.send(path.join(__dirname,'./public/employeePortal/testFrontEnd.js'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Portal PAGE TS
app.get('/query', async (req, res) => {
  try {
      res.send(req.headers.query);
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Crypto Client Side JS
app.get('/cryptoMin.js', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,"/cryptoMin.js"));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});


