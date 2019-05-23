const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
	googleId : {
		type : String
	},
	name : {
		type : String
	},
	email : {
		type : String
	},
	profile : {
		type : String
	},
	avatar : {
		type : String
	},
	phone : {
		type : Number
	},
	location : {
		type : String
	},
	country : {
		type : String
	},
	city : {
		type : String
	},
	dob : {
		type : Date
	},
	facebook : {
		type : String
	},
	instagram : {
		type : String
	},
	tiktok : {
		type : String
	},
	twitter : {
		type : String
	}
});

module.exports = Tags = mongoose.model('tags', TagSchema);