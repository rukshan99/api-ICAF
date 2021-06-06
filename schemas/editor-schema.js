const mongoose = require('mongoose')

const editorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  contactno: {
    type: String,
    required: [true, 'Contact no is required']
  },
  subject: {
    type: String,
    required: [true, 'Subject is required']
  },
  timeslot: {
    type: String,
    required: [true, 'Time Slot is required']
  },
  status: {
    type: String,
    required: [true, 'Status is required']
  }

})


module.exports = mongoose.model('conference', editorSchema);