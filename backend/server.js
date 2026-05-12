const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/convert", (req, res) => {

  const { temp, unit } = req.body;

  let result = {};

  if (unit === "C") {
    result.fahrenheit = (temp * 9/5) + 32;
    result.kelvin = temp + 273.15;
  }

  else if (unit === "F") {

    const celsius = (temp - 32) * 5/9;

    result.celsius = celsius;
    result.kelvin = celsius + 273.15;
  }

  else if (unit === "K") {

    const celsius = temp - 273.15;

    result.celsius = celsius;
    result.fahrenheit = (celsius * 9/5) + 32;
  }

  res.json(result);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});