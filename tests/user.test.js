const mongoose = require("mongoose");

const User = require("../schemas/user-schema");
const dbHandler = require("./db-handler");
const { saveUser } = require("../controllers/user-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("user ", () => {
  it("can be created correctly", async () => {
    expect(async () => await saveUser(testUser)).not.toThrow();
  });
});

const testUser = {
  userid: "461eb8cc-3120-4c70-a227-cc3a6a3e7df9",
  name: "Rukshan Jayasekara",
  email: "it19129204@my.sliit.lk",
  password: "$2y$10$Jz45lNXMRW8vCak7AfqlrO1y9OjvcN1fytQYGHSR9W2nasFK249SG ",
  role: "Attendee",
  document: {},
  payments: [mongoose.Types.ObjectId("4e5edf6a0ca62770dfvejd9a")],
};
