const schema = {
  type: "object",
  properties: {
    user: {
      type: "object",
      properties: {
        id: {
          $ref: "#/definitions/positiveInt",
        },
        firstName: {
          type: "string",
          faker: "name.firstName",
        },
        lastName: {
          type: "string",
          faker: "name.lastName",
        },
        age: {
          type: "integer",
          minimum: 18,
          maximum: 60,
        },
      },
      required: ["id", "firstName", "lastName", "age"],
    },
  },
  required: ["user"],
  definitions: {
    positiveInt: {
      type: "integer",
      minimum: 0,
      exclusiveMinimum: true,
    },
  },
};

module.exports = schema;
