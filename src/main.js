require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const db = require("../db/models");
const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");
const tagRouter = require("./routes/tag.routes") 
const commentRouter = require("./routes/comment.routes") 

const PORT = process.env.PORT || 3000;

const swaggerDocument = YAML.load("./docs/main.yaml");
const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/tags", tagRouter);
app.use("/comments", commentRouter);


app.listen(PORT, async () => {
  console.log(`Server escuchando en el puerto ${PORT}`);
  await db.sequelize.sync({ force: false });
});
