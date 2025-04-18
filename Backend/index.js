require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

const {HoldingsModel} = require('./model/HoldingsModel')
const { PositionsModel } = require('./model/PositionsModel');
const {OdersModel, OrdersModel} = require('./model/OdersModel')

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

const app = express();

mongoose.connect(uri);

app.use(cors());
app.use(bodyParser.json())

app.get("/allHoldings", async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  });
  
  app.get("/allPositions", async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  });

  app.post("/newOrder", async (req, res) => {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });
  
    newOrder.save();
  
    res.send("Order saved!");
  });

  app.get("/orders", async (req, res) => {
    try {
      const orders = await db.collection("orders").find().toArray(); // adapt to your DB
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });
  
  

app.listen(5000, ()=>{
    console.log("Hey")
})