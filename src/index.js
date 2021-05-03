import express from "express";
import helmet from "helmet";
import router from "./router";
const PORT = 5000;

const app = express();
app.use(helmet());
router(app);

app.listen(PORT, (error) => {
  if (error) return console.log(error);
  console.log(`Server is listening on port ${PORT}`);
});
