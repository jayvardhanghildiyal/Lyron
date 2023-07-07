const { AttachmentBuilder, SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const thumbnail = new AttachmentBuilder('./commands/utility/assets/thumbnail.png');
const icon = new AttachmentBuilder('./commands/utility/assets/icon.png');

const exampleEmbed = new EmbedBuilder()
	.setColor(0xa8326b)
	.setAuthor({ name: 'Welcome to Kafka\'s Doormat!', iconURL: 'https://static.wikia.nocookie.net/houkai-star-rail/images/5/57/Welt_Sticker_01.png/revision/latest?cb=20230505074133', url: 'https://twitter.com/DailyKafka_/status/1667073693019930624?s=20' })
	.setDescription('React to the roles to get pinged for that particular game !')
	.setThumbnail('https://static.wikia.nocookie.net/04b90080-e34c-4029-ac72-625827fa6757')
	.addFields(
		{ name: 'Valorant', value: '<:sweating:1104860877947150336>' },
		{ name: 'Apex Legends', value: '<:apexlogo:1104863303014035507>'},
		{ name: 'Overwatch', value: '<:FeelsAngyMan:1105006093580640287>'},
        { name: 'Honkai: Star Rail  ', value: '<:mommysorry:1104858049384042558>'},
        { name: 'Terraria', value: '<:terraria:1120393551608549467>'},
	)
	.setImage('https://static.wikia.nocookie.net/houkai-star-rail/images/9/95/Character_Kafka_Splash_Art.png/revision/latest/scale-to-width-down/1000?cb=20230216230656')
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