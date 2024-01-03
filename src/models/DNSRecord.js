// DNSRecord.js
const mongoose = require('mongoose');

const dnsRecordSchema = new mongoose.Schema({
  type: String,
  name: String,
  value: String,
  // Add other relevant fields
});

const DNSRecord = mongoose.model('DNSRecord', dnsRecordSchema);

module.exports = DNSRecord;
