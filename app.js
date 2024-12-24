const express = require('express');
const connectDB = require('./config/db.config.js');
const productRouter = require('./routes/products.route.js');
const userRouter = require('./routes/user.route.js');

const app = express();
const port = 3000;

app.use(express.json());
connectDB();

app.use('/api/products', productRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});