const Discord = require("discord.js");

module.exports = {
    name : "edm",
    descriptiom : "gives a list of edms",
    execute(message,args){
        const lol = new Discord.MessageEmbed()
        .setAuthor("Here's The Playlist",)
        .setDescription(
          "\n3rd Prototype – Feels So Good\nUnknown Brain -  Waiting\nTiesto & KSHMR feat. Vassy – Secrets\nRaven & Kreyn – Biscuit\nLet the darkness take control (ULTIMATE Remix)\nJim Yosef & Sara Skinner – WILDFIRE\nEd Sheeran – Shape of you(BYAKE Remix)\nDistrion & Electo-Light – Drakkar\nBvrnout x VOVIII -  Apache\nJim Yosef – Moonlight\nJoey Bada$$ - Devestated(MVMMALS Remix)\nKrewella -  Alibi[Far Out Remix]\nMarshmello ft. Khalid – Silence\nMarshmello – Alone\nRain Main ft. OLy -  Bring Back the summer\nRetrovision – Puzzle\nSwedish House Mafia – Don’t You Worry Child\nThe FatRat – Mayday\nJanji – Heroes Tonight(ft. Johnning)\nAnne Marie – 2002[BYAKE Remix]\nAvicii – Wake Me Up\nCalvin Harris – Summer\nDiamond Eyes – Hold ON\nDiamond Eyes – Stars\nElektromia – Limitless\nGioni – Trigger\nDancin[Krono Remix]\nSpoiler by Hyper\nBeautiful lies by vip\nResonance by home"
        )
        .setColor(0x344ceb);
      message.channel.send(lol);
    }
}