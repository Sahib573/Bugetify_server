const express = require("express");
const config = require("dotenv").config;
const passport = require("passport");
const connectDb = require("../backend/config/mongoose");
const multer = require("multer");
const cors = require('cors');


config({
  path: "./config/config.env",
});
connectDb();
var corsOptions = {
  origin: ['http://localhost:5173',process.env.FRONTEND_URL],
  methods : ['GET','POST','PUT,','DELETE'],
  credentials : true
}
const app = express();

// *************middlewares*************
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// require("../backend/config/passport-jwt")(passport);
// app.use(passport.initialize());

// *************routes*************
// app.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
//   res.send("hi");
// });
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
res.send("hi");
})
app.use("/", require("./routes"));

app.listen(process.env.PORT, (err) => {
  if(err) console.log("Err while starting server")
  console.log("server started " + process.env.PORT);
console.log("frotn url " + process.env.FRONTEND_URL);
});
module.exports = app;
// export  default app;