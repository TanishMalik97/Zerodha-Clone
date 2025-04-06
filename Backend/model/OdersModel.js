const { model } = require("mongoose");

const { OrdersSchema } = require("../schemas/OdersSchema");

const OrdersModel = new model("order", OrdersSchema);

module.exports = { OrdersModel };