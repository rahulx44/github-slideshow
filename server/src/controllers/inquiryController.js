const Inquiry = require('../models/Inquiry');

exports.createInquiry = async (req, res) => {
  const inquiry = await Inquiry.create(req.body);
  res.status(201).json(inquiry);
};

exports.getInquiries = async (_req, res) => {
  const inquiries = await Inquiry.find().populate('listingId', 'title slug').sort({ createdAt: -1 });
  res.json(inquiries);
};
