const mongoose = require("mongoose");

const User = require("../schemas/user-schema");
const dbHandler = require("./db-handler");
const { saveUser } = require("../controllers/user-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("user ", () => {
  it("can be created correctly", async () => {
    expect(async () => await saveUser(req, res, next)).not.toThrow();
  });
});

const req = {
  body: {
    name: "Rukshan Jayasekara",
    email: "it19129204@my.sliit.lk",
    password: "qwerty123456",
    role: "Attendee",
    document: {},
    paymentForm: {
      cardNo: "1234567890",
      expDate: "03/04/2024",
      cvv: "123",
    },
  },
};

const res = "";

const next = (error) => {
  return error;
};
