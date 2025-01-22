const express = require("express");
const app = require();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app.request(bodyParser.json());
app.use(cors());

const db=mysql.createConnection(
    {
        user:"root",
        host:"127.0.0.1",
        password:"",
        database:"kozutak",
    }
);