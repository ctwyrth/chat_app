const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	xxx: {
		type: String,
		required: []
	},
	xxx: {
		type: Number,
		required: []
	}
}, {timestamps: true});

module.exports.Project = mongoose.model("Project", ProjectSchema);
