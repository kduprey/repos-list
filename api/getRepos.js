const axios = require("axios");

module.exports = (req, res) => {
	axios
		.get("https://api.github.com/users/kentond18/repos", {
			auth: {
				username: "kentond18",
				password: process.env.GITHUB_PASS,
			},
		})
		.then((repos) => {
			res.send(repos.data);
		});
};
