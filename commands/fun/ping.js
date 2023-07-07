const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
	data: new SlashCommandBuilder()
		.setName('blink')
		.setDescription('Replies with plink and a bonus plank!'),
	async execute(interaction) {
		await interaction.reply('plink');
		await wait(250);
		await interaction.followUp('plank!');
		await interaction.followUp({content: 'and a plonk just for you :D', ephemeral: true});
	},
};