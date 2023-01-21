const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: String,
    email:String,
    phno:String
});

const User = model("matter", userSchema);

module.exports = User;