import express from "express";
import cors from "cors";
import BodyParser from "body-parser";
import bodyParser from "body-parser";
import db from "./database/db.js";

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const sql = `INSERT INTO users (username,password) VALUES (?,?)`;
    db.query(sql,[username,password], (err,result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send({username: username})
        }
    })
})



app.listen(8800, () => console.log("Server Connected on port 8800!"))
