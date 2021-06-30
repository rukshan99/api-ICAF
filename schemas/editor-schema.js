const mongoose = require('mongoose')

const editorSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  venue: { type: String, required: true, trim: true },
  starttime: { type: String, required: true, trim: true },
  endtime: { type: String, required: true, trim: true },
  guest: { type: String, required: true, trim: true },
  guest2: { type: String, required: true, trim: true },
  guest3: { type: String, required: true, trim: true },
  status: { type: Boolean, required: true, trim: true },
  presentation: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'presentations' }],
  workshop: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'workshops' }]
})


module.exports = mongoose.model('conference', editorSchema);