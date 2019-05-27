const mongoose = require("mongoose");

const TagSchema = new mongoose.Schema({
  tag: {
    type: String,
    required: true
  },
  searchWords: [
    {
			type: String,
			required : true
		},
		{
			id : String,
			required : true
		}
  ],
  useTime: {
    type: Number,
    required: true
  },
  lastUse: {
		type: Date,
		required : true
  }
});

module.exports = Tags = mongoose.model("tags", TagSchema);
