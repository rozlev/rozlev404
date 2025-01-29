const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
app .use(bodyParser.json());
 
const db = mysql.createConnection(
    {       
     user:"root",
    host:"127.0.0.1",
    port:"3307",
    password:"",
    database:"kozutak",
    }
);
 
app.get("/", (req, res) => {
    res.send("Fut a backend!");
})
 
app.get("/regiok",(req, res) => {
    const sql = "SELECT * FROM `regiok`";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.post("/ujregio", (req, res) => {
    const { Rid, regionev, regio_tipusa } = req.body;
    const sql = "INSERT INTO `regiok` (`Rid`, `regionev`, `regio_tipusa`) VALUES (?, ?, ?)";
    const VALUES = ['11', 'Budapest', 'Főváros'];
 
    db.query(sql, VALUES, (err, result) => {
        if (err) return res.json(err);
        return res.json({ message: "Sikeres beszúrás", result });
    });
});


app.listen(3001, () => {
    console.log("Server is runningg on port 3001");
});