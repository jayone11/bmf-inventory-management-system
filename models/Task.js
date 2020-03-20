const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// This is for our products

// Create Schema 
const TaskSchema = new Schema({
  project: {
    type: Schema.Types.ObjectId,
    ref: "projects",
    required: true
  },
  taskName: {
    type: String,
    required: true
  },
  dateDue: {
    type: String
  },
  assignee: {
    type: String
  },
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
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Task = mongoose.model("tasks", TaskSchema);
