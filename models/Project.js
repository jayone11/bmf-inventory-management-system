const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Locations

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Object,
    required: true
  },
  teamMembers: [
    {
      email: {
        type: String
      },
      name: {
        type: String
      }
    }
  ],
  vendor: {
    type: String
  },
  vendor_sku: {
    type: String
  },
  yards: {
    type: String
  },
  cost: {
    type: String
  },
  sku: {
    type: String
  },
  product: {
    type: String
  },
  places: {
    type: String
  },
  address: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
