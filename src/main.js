const express = require("express");
const db = require("../db/models");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(PORT, async () => {
  console.log(`Server escuchando en el puerto ${PORT}`);
  await db.sequelize.sync({ force: false });
});
