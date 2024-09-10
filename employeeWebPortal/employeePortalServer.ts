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
app.get('/employeePortal.html', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,'./public/employeePortal/employeePortal.html'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Portal PAGE CSS
app.get('/employeePortal.css', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,'./public/employeePortal/employeePortal.css'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});

// Portal PAGE TS
app.get('/employeePortal.js', async (req, res) => {
  try {
      res.sendFile(path.join(__dirname,'./public/employeePortal/employeePortal.js'));
  } catch (err) {
      console.error(err);
      res.status(500).send('Error executing query');
  }
});