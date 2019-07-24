const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    fristname :{
        type : String
    },
    lastname: {
		type: String
	},
	contact: {
		type: String
	},
	address: {
		type: String
	}
}) 

module.exports = mongoose.model('User',UserSchema);

