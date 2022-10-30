const express = require("express");
const routerApi = require("../controllers/routes");
const cors = require('cors');
const errorHandler = require("../controllers/middleware/error.handler");

const app = express();
const port = 3000;
app.use(express.json());

const whitelist = ['http://localhost:8080', 'http://localhost:4200'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

routerApi(app);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Ingrear A http://localhost:${port}/api/v1/empleado`);
});
