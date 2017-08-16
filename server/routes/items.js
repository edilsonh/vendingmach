const express = require("express");
const router = express.Router();
const db = require("../models");
const Item = db.item;

router.get("/api/customer/items", (req, res) => {
  // console.log("INSIDE GET ROUTE~~~~~~~~~~~~~~~~");
  Item.findAll().then((items) => {
    res.json({
      status: "success",
      data: items
    });
  })
});

router.post("/customer/item/:itemId/purchase", (req, res) => {
  currentCustomer(custom)
})

module.exports = router
