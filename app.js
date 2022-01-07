const express= require("express");
const bp = require("body-parser")
const app = express();
app.use(bp.json());
app.use(express.static(__dirname+ "/images"))
app.get("/", (req, resp)=> {
    resp.send("hello");
})

app.post("/", (req, resp)=> {
    resp.send("posted!");
})

app.listen(3000, ()=> {
    console.log("server listening on 3000");
})