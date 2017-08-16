const express = require("express");
const router = express.Router();
const db = require("../models");
const Item = db.item;
const Customer = db.customer;

router.post("/api/customer/items/:itemid/purchase", (req, res) => {
  // res.json({
  //   status: "success"
  // })
  console.log("INSIDE POST ROUTE----------------");
  res.send("")
})

module.exports = router
