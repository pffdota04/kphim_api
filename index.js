const express = require("express");
var compression = require("compression");

const filmRouter = require("./routes/film");
const linkRouter = require("./routes/link");
const userRouter = require("./routes/users");
const adminRouter = require("./routes/admin");
const kitkotRouter = require("./routes/kitkot");
const newsRouter = require("./routes/news");
const subs = require("./routes/subs");

const logger = require("morgan");
const helmet = require("helmet");
const path = require("path");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

require("dotenv").config();

const app = express();

const apiLimiter = rateLimit({
  windowMs: 1 * 5 * 1000,
  max: 20, // 30 rq / 5s
  message: "Too many request",
});

app.use(logger("dev"));
app.use(express.json());
app.use(compression());

app.use(cors());
app.use(helmet());
app.use(
  cors({
    origin: ["https://www.kphim.xyz", "http://www.kphim.xyz"],
  })
);

// app.use(limit_voucher());
app.use("/api/film", filmRouter);
app.use("/api/link", apiLimiter, linkRouter);
app.use("/api/user", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/kitkot", kitkotRouter);
app.use("/api/news", newsRouter);

app.use("/api/public/subs", subs);

// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });
// app.use(function (req, res, next) {
//   next(createError(404));
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
