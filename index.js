import express from "express"
import ejs from "ejs";
import bodyParser from "body-parser";

const app = express()
const port = 3000
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));


function getday(req, res) {
    const d = new Date();
    let day = d.getDay();
    let message = "";

    if (day === 6 || day === 0) {
        message = "<h1>HEY! it's weekend, it's time to have fun!</h1>";
    } else if (day >= 1 && day <= 5) {
        message = "<h2>HEY! it's weekday, it's time to work hard</h2>";
    }

    res.render("index.ejs", { message }); // Pass the message as data to the template
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/submit",getday, (req, res) => {
 
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})