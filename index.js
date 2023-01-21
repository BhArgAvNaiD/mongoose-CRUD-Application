const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Users = require("./models/users");
const PORT = process.env.PORT || 3000
app.use(express.json());

// db connection
mongoose.connect("mongodb://127.0.0.1:27017/crudmongoose");

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/users", async (req, res) => {
    const users = await Users.find();
    res.send(users);
});

app.post("/users", async(req,res) => {
    const { name, email, phno } = req.body;
    const userdata = new Users({
        name,
        email,
        phno,
    });
    const user = await userdata.save();
    res.send(user);
});

app.put("/user", async (req, res) => {
    const { name, email, password, phno, id } = req.body;
    const user = await Users.findByIdAndUpdate(id, {
        name,
        email,
        password,
        phno,
    });
    res.send(user);
});

app.delete("/user", async (req, res) => {
    const { id } = req.body;
    const user = await Users.findByIdAndDelete(id);
    if (user) {
        res.send("user deleted");
    }
});

app.listen(PORT, () => console.log("port started"));