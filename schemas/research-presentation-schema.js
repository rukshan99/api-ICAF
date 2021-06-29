const mongoose = require('mongoose')

const researchSchema = new mongoose.Schema({
  conference: { type: String, required: true, trim: true },
  topic: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  starttime: { type: String, required: true, trim: true },
  endtime: { type: String, required: true, trim: true },
  presenter: { type: String, required: true, trim: true }
})


module.exports = mongoose.model('presentations', researchSchema);