const mongoose = require("mongoose");

const Payment = require("../schemas/payment-schema");
const dbHandler = require("./db-handler");
const { savePayment } = require("../controllers/user-controller");

beforeAll(async () => await dbHandler.connect());

afterEach(async () => await dbHandler.clearDatabase());

afterAll(async () => await dbHandler.closeDatabase());

describe("payment ", () => {
  it("can be created correctly", async () => {
    expect(async () => await savePayment(req, res, next)).not.toThrow();
  });
});

const req = {
  body: {
    paymentForm: {
      cardNo: "1234567890",
      expDate: "03/04/2024",
      cvv: "123",
    },
    userid: mongoose.Types.ObjectId("55153a8014829a865bbf700d"),
  },
};

const res = "";

const next = (error) => {
  return error;
};
