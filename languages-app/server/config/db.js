const mysql = require('mysql')
const db = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database:"languages" 
})

module.exports = db;