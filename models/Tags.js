const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
	tag : {
		type : String
	},
	usetime : {
		type : Number,
		required : true
	},
	lastuse : {
		type : Date
	}
});

module.exports = Tags = mongoose.model('tags', TagSchema);