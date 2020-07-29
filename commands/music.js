const Discord = require("discord.js")

module.exports = {
    name: "music",
    description: "this command pushes the person who ordered it to spotify for sequenced and catogerically arranged albums",
    execute(message,args){
        const embed = new Discord.MessageEmbed()
        .setAuthor("Click here to check out all the playlists on Spotify!","https://w7.pngwing.com/pngs/249/967/png-transparent-musical-ensemble-music-school-art-week-end-logo-computer-wallpaper-classical-music.png","https://open.spotify.com/user/8ccn4jtcoh8qcrn5ge3hi63d5?si=ZGQUaU_OShCaLald6dzt8Q")
          .setColor(0x344ceb)
          .setFooter("Music")
          .setTimestamp();
        message.channel.send(embed);
    }
}