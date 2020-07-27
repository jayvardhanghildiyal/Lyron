const Discord = require("discord.js");

module.exports = {
    name : "help",
    descriptiom : "gives help",
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setAuthor("I'm Here To Help!","https://w7.pngwing.com/pngs/249/967/png-transparent-musical-ensemble-music-school-art-week-end-logo-computer-wallpaper-classical-music.png")
        .setDescription(
          "These are the commands you can use on me:"
        )
        .addFields(
          {name: '*hey:', value: 'Just because I am a bot, why not share greetings with me?'},
          {name: '*edm:', value: 'To show a list of handpicked EDMs that i like, to which you can give a try!'},
          {name: '*help:', value: 'Help-ception'},
          {name: '*privacy:', value: 'Learn about my privacy policies'},
          {name: '*purge:', value: 'This command can be used by Higher Ranks to purge the 24 hr cooldown chat'},
          {name: '*brave:', value: 'This command gives permit to check out the 24 hr cooldown channel'},

        )
        .setTimestamp()
        .setFooter("Help","https://w7.pngwing.com/pngs/249/967/png-transparent-musical-ensemble-music-school-art-week-end-logo-computer-wallpaper-classical-music.png")
        .setColor(0x00ffff);
      message.author.send(embed);
      message.reply("Check ya DMs");
    }
}