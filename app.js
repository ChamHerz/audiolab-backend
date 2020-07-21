const express = require("express");
const bodyParser = require("body-parser");

// Load routers
const userRoutes = require("./routers/user");

const app = express();
const { API_VERSION } = require("./config");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Header HTTP
// ....

// Router Basic
app.use(`/api/${API_VERSION}`, userRoutes);

module.exports = app;
