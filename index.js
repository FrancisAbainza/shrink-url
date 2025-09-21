import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const port = 3000;
const app = express();
const API_URL = "https://cleanuri.com/api/v1/shorten";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render("index.ejs", {
    content: ""
  });
});

app.post("/post-url", async (req, res) => {
  try {
    const result = await axios.post(API_URL, req.body);
    res.render("index.ejs", {
      content: result.data.result_url
    })
  } catch (error) {
    res.render("index.ejs", {
      content: error
    })
  }
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});