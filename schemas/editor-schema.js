const mongoose = require('mongoose')

const editorSchema = new mongoose.Schema({
  name: {type: String,required: [true, 'name is required'] },
  description: {type: String, required: [true, 'description is required']},
  venue: {type: String,required: [true, 'venue is required']},
  starttime: {type: String,required: [true, 'starttime is required']},
  endtime: {type: String,required: [true, 'endtime is required']},
  guest: { type: String, required: true, trim: true },
  guest2: { type: String, required: true, trim: true },
  guest3: { type: String, required: true, trim: true },
  status: {type: String, required: [true, 'Status is required']},
  presentation: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'presentations' }],
  workshop: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'workshops' }]
})


module.exports = mongoose.model('conference', editorSchema);