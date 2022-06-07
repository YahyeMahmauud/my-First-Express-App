//task
const Express = require("express");
let app = Express();
const port = 8008;
//task 3
app.get("/", (req, res) => {
  req.query.search === ""
    ? res.status(200).json({ message: "not found" })
    : res.status(200).json({ message: " found a user" });
});
//task 4 , 5
app.use(Express.json());

app.post("/create", (req, res) => {
  req.body.username === "" || req.body.password === ""
    ? res.status(200).json({ message: "not Created" })
    : res.status(200).json({ message: "user Created" });
});
//task 6
app.put("/edit", (req, res) => {
  req.body.username === ""
    ? res.status(200).json({ message: "username cannot be empty" })
    : res.status(200).json({ message: "username changed " });
});

//task 6
app.delete("/delete", (req, res) => {
  req.query.id === ""
    ? res.status(200).json({ message: "id can't empty " })
    : res.status(200).json({ message: " account deleted" });
});

app.listen(port, () => {
  console.log("listening on port yes");
});
