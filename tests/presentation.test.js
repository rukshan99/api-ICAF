const mongoose = require("mongoose");


const dbHandler = require("./db-handler");
const { createPresentation } = require("../controllers/presentation-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("presentation ", () => {
  it("can be created correctly", async () => {
    expect(async () => await createPresentation(req, res, next)).not.toThrow();
  });
});

const req = {
  body: {
    conference: "Environmental Studies",
    topic: "Introduce Environment",
    description: "nothing",
    starttime: "09.12.2021  09.00AM",
    endtime: "12.12.2021  18.00PM",
    presenter: "Saman perera"
  },
};

const res = "";

const next = (error) => {
  return error;
};
