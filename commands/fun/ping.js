const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with PogMan!'),
	async execute(interaction) {
		await interaction.reply('PogMan!');
	},
};