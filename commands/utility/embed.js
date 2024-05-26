const { AttachmentBuilder, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const thumbnail = new AttachmentBuilder('./commands/utility/assets/thumbnail.png');
const icon = new AttachmentBuilder('./commands/utility/assets/icon.png');

const exampleEmbed = new EmbedBuilder()
	.setColor(0xFFD700)
	.setAuthor({ name: 'Welcome to Kafka\'s Doormat!', iconURL: 'https://genshinlab.com/wp-content/uploads/Wuthering-Waves-Rover.png' })
	.setDescription('React to the emotes to recieve roles !')
	.setThumbnail('https://static.wikia.nocookie.net/wutheringwaves/images/a/a1/Female_Rover_1.jpg/revision/latest?cb=20240419041112')
	.addFields(
		{ name: 'Valorant', value: '<:sweating:1104860877947150336>' },
		{ name: 'Apex Legends', value: '<:apexlogo:1104863303014035507>'},
		{ name: 'Overwatch', value: '<:FeelsAngyMan:1105006093580640287>'},
        { name: 'Terraria', value: '<:terraria:1120393551608549467>'},
		{ name: 'League of Legends', value: '<:league:1131542996337311764>'},
		{ name: 'Minecraft', value: '<:minecraft:1149742204177371186>'},
		{ name: 'Wuthering Waves', value: '<:baizhi:1243289325546770605>'},
	)
	.setImage('https://img3.gelbooru.com/images/7b/be/7bbea3a42fe6418deb14b82819b277a2.jpg')
	.setTimestamp()
	.setFooter({ text: 'react to roles to get roles WOW !' });

module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Provides a role-react server embed.'),
	async execute(interaction) {
		// interaction.guild is the object representing the Guild in which the command was run
		await interaction.reply({ embeds: [exampleEmbed]});
	},
};