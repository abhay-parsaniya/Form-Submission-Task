const express = require("express");
const app = express();
const router = express.Router();
const mysql = require("mysql");
const cors = require('cors');
const PORT = 5000;

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "~qT4hDB6Ge+aFXe",
  database: "form-data",
});

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("Connection Successful !!");
});

app.use(express.json());

app.post("/datasubmit", (req, res) => {

    console.log("26", req.body);

    const {formData} = req.body;

    console.log("28",formData);

    for (let key in formData) {
        if (formData[key] === "") {
          // console.log(key);
          return res.status(422).json({ error: "Please fill all the fields !!" });
        }
    }
      // res.json({msg: "Successful posted !!"});
      db.query(
        "SELECT email FROM user WHERE email = ?",
        [formData.email],
        async (err, result) => {
          if (err) {
            return console.log(err);
          }
          if (result.length > 0) {
            return res.status(422).json({ error: "Email id already exist" });
          } else {
            db.query(
              "INSERT INTO user (firstName, lastName, gender, city, email, password) values (?,?,?,?,?,?)",
              [formData.firstName, formData.lastName, formData.gender, formData.city, formData.email, formData.password],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  // console.log(result);
                  return res.status(200).json({ msg: "Submit Successfully !!" });
                }
              }
            );
          }
        }
      );
});

app.listen(PORT, () => {
  console.log("Listning at Port no.", PORT);
});
