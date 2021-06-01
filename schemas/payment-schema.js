const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
  payment_id: {
    type: String,
    required: [true, 'Payment ID is required']
  },
  amount: {
    type: String,
    required: [true, 'Amount is required']
  },
  paymentDate: {
    type: String,
    required: [true, 'Payment date is required']
  },
  userid: {
    type: String,
    required: [true, 'User ID is required']
  }
})

module.exports = mongoose.model('Payment', paymentSchema);