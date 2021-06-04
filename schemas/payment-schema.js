const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const paymentSchema = new mongoose.Schema({
  payment_id: { type: String, required: [true, 'Payment ID is required'] },
  amount: { type: String, required: [true, 'Amount is required'] },
  paymentDate: { type: String, required: [true, 'Payment date is required'] },
  cardDetails: { type: Object, required: [true, 'Credit card is required'] },
  userid: { type: mongoose.Types.ObjectId, required: true, ref: 'User' }
})

paymentSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Payment', paymentSchema);