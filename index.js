const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
const userRouter = require('./Routers/User')
const cartRouter = require('./Routers/Cart')
const orderRouter = require('./Routers/Orders')
const productRouter = require('./Routers/Product')
const app = express()
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req ,res) => {
    res.send("server is runing")
})

app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);

mongoose.connect(process.env.MONGO_URL, () => { console.log("mongodb connected..") })
    .then(app.listen(PORT, () => {
    console.log("server is runing")
})
)

