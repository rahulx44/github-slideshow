const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema(
  {
    listingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Listing', required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Inquiry', inquirySchema);
