const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
	word : {
		type : String,
		required : true
	},
	relation : [
		{
			tag : {
				type : String
			}
		}
	]
});

module.exports = Tags = mongoose.model('tags', TagSchema);