const mongoose = require("mongoose");

const Payment = require("../schemas/payment-schema");
const dbHandler = require("./db-handler");
const { savePayment } = require("../controllers/user-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("payment ", () => {
  it("can be created correctly", async () => {
    expect(async () => await savePayment(testPayment)).not.toThrow();
  });
});

const testPayment = {
  payment_id: "461eb8cc-3120-4c70-a227-cc3a6a3e7df9",
  amount: "1000",
  paymentDate: "Fri Jun 11 2021 23:35:05 GMT+0530 (India Standard Time)",
  cardDetails: {
    cardNo: "1234567890",
    expDate: "03/04/2024",
    cvv: "123",
  },
  userid: mongoose.Types.ObjectId("4e5edf6a0ca62770dfvejd9a"),
};
