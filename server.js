const express = require("express");
const passport = require("passport");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json({}));

app.get("/*", function(req, res, next) {
  res.setHeader(
    "Access-Control-Expose-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-*, Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "HEAD, GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// initialize passport
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

// Connect with MongoDB
connectDB();

// Define Routes
app.use("/api/tags", require("./routes/api/tags"));
app.use("/api/user-auth", require("./routes/api/userAuth"));
app.use("/auth", require("./routes/auth"));

app.listen(port, () => console.log(`Server Started on PORT ${port}`));
