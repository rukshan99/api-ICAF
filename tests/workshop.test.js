const mongoose = require("mongoose");


const dbHandler = require("./db-handler");
const { createWorkshop } = require("../controllers/workshop-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("workshop ", () => {
  it("can be created correctly", async () => {
    expect(async () => await createWorkshop(req, res, next)).not.toThrow();
  });
});

const req = {
  body: {
    conference: "Environmental Studies",
    topic: "environmental workshop",
    description: "nothing",
    starttime: "09.12.2021  09.00AM",
    endtime: "12.12.2021  18.00PM",
    presenter: "Sumana perera"
  },
};

const res = "";

const next = (error) => {
  return error;
};
