const Discord = require("discord.js");

module.exports = {
    name : "help",
    descriptiom : "gives help",
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setTitle("I'm Here To Help!")
        .setDescription(
          "These are the commands you can use on me:\n\n*hey:\tJust because I am a Bot, why not share greetings with me?\n\n*edm:\tTo show the list of EDMs you can listen!\n\n*help:\tWell.....\n\n*lofi:\tA Playlist of lofi songs you can listen to!\n\n*privacy:\tLearn about my privacy policies"
        )
        .setColor(0x00ffff);
      message.author.send(embed);
      message.channel.send("Check ya DMs");
    }
}