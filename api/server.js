const express = require("express");

const Hobbits = require("../hobbits/hobbitsModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "down" });
});

server.get("/hobbits", (req, res) => {
  Hobbits.getAll()
    .then((hobbits) => {
      res.status(200).json(hobbits);
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
});

module.exports = server;

