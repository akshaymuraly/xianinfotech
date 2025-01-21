const Express = require("express");
require("dotenv").config();
const app = Express();
const PORT = process.env.PORT;
const ErroHandler = require("./middlewares/ErrorHandler");
const dbConnection = require("./config/mongoDB.config");
const cors = require("cors");

// ----------------Routers----------------------------------------------

const userRouter = require("./modules/user/routes/user.router");

// ----------------Middlewares------------------------------------------

dbConnection();
app.use(Express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

// ----------------Routes-----------------------------------------------

app.use("/api/user", userRouter);

// ----------------Error handler----------------------------------------

app.use(ErroHandler);

// ----------------Server initializing----------------------------------
app.listen(PORT, () => {
  console.log(`Listening to the port ${PORT}`);
});
