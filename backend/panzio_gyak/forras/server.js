const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { error } = require("console");
app.use(cors())
app.use(bodyParser.json());

const db = mysql.createConnection(
    {       
     user:"root",
    host:"127.0.0.1",
    password:"",
    database:"fogado",
    }
);

app.get("/", (req, res) => {
    res.send("A szerver működik!");
})

app.get("/szobak",(req, res) => {
    const sql = "SELECT szobak.sznev, szobak.agy FROM szobak;";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get("/szobalista",(req, res) => {
    const sql = "SELECT szobak.sznev AS 'Szoba neve', COUNT(DISTINCT foglalasok.vendeg) AS 'vendegek', SUM(DATEDIFF(foglalasok.tav, foglalasok.erk)) AS 'vendegejszakak' FROM foglalasok INNER JOIN szobak ON foglalasok.szoba = szobak.szazon GROUP BY szobak.szazon, szobak.sznev ORDER BY vendegejszakak, vendegek;";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})

app.get("/szobakfoglaltsag",(req, res) => {
    const sql = "SELECT vendegek.vnev AS 'Vendég neve', foglalasok.erk AS 'Érkezés', foglalasok.tav AS 'Távozás' FROM foglalasok INNER JOIN vendegek ON foglalasok.vendeg = vendegek.vsorsz INNER JOIN szobak ON foglalasok.szoba = szobak.szazon WHERE szobak.sznev = '?' ORDER BY vendegek.vnev;";
    db.query(sql, (err, result) => {
        if(err) return res.json(err);
        return res.json(result)
    })
})



app.listen(3000, () => {
    console.log("A szerver a 3000 porton fut!");
});