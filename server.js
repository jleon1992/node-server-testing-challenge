const express = require("express");

const rappersRouter = require('./rappers/rappers-router')
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "running..." });
});

server.use('/rappers', rappersRouter)

module.exports = server;
