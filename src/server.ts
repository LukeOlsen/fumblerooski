// import { createServer } from "http";
import { app } from "./app";
import { sequelize } from "./sequelize";

const port = 5000;

(async () => {
  await sequelize.sync();

  app.listen(port, () => console.log(`Server listen on port ${port}`));
})();
