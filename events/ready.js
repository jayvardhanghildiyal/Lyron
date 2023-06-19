const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true, //executes the code once true
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};