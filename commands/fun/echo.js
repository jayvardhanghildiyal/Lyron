const {SlashCommandBuilder} = require('discord.js');

const data = new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Replies with the input the user gives')
    .addStringOption(option =>
        option.setName('input')
            .setDescription('The input to echo back'))
            .setRequired(true)
    .addChannelOption(option =>
        option.setName('ephemeral')
            .setDescription('Whether or not the input should be showed just to you.'))