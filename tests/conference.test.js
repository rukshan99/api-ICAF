const mongoose = require("mongoose");


const dbHandler = require("./db-handler");
const { addingConference } = require("../controllers/conference-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("conference ", () => {
  it("can be created correctly", async () => {
    expect(async () => await addingConference(req, res, next)).not.toThrow();
  });
});

const req = {
  body: {
    name: "Environmental Studies",
    description: "About environment",
    venue: "sliit",
    starttime: "09.12.2021  09.00AM",
    endtime: "12.12.2021  18.00PM",
    guest: "Nimal Perera",
    guest2: "Sahan Perera",
    guest3: "Samantha Fernando",
    status: "false",
  },
};

const res = "";

const next = (error) => {
  return error;
};
