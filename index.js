 const express = require("express");
 const db = require("./db/connection");
 
 const PORT = process.env.PORT || 3006;
 const app = express();

 var connection = mysql.createConnection({
     host: "localhost",
     port: 3306,
     database: "employee_trackerr",
 });
