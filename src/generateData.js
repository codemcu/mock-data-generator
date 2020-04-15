const jsf = require("json-schema-faker");
const schema = require("./schema");
const fs = require("fs");

const toStringify = (faker) => JSON.stringify(faker, null, 2);

jsf
  .resolve(schema)
  .then((faker) => {
    fs.writeFile("./src/mock/db.json", toStringify(faker), (error, data) =>
      error ? console.log(error) : console.log("Mock data generated.")
    );
  })
  .catch((error) => console.log(error));
