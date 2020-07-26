const Discord = require("discord.js");

module.exports = {
    name : "lofi",
    descriptiom : "gives a list of lofi music",
    execute(message,args){
        const son = new Discord.MessageEmbed()
        .setTitle("Here are some songs in this category:")
        .setDescription(
          "\nTom Day - Going Home\nTeen Daze - On the edge of a new age\nGeotic - Actually Smiling\nENRA - i have to leave now\nbesu - blue\nThat's Cool - Hold On\nP.s - nostalgic\nＭｏｊｏ - dont\n pettersson - can you feel me now\nCantrip - Shoreside\n im.fine - all you need is time"
        )
        .setColor(0xffa500);
      message.channel.send(son);
    }
}