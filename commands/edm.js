const Discord = require("discord.js");

module.exports = {
    name : "edm",
    descriptiom : "gives a list of edms",
    execute(message,args){
        const lol = new Discord.MessageEmbed()
        .setAuthor("Click here to check out this playlist on Spotify!","https://w7.pngwing.com/pngs/249/967/png-transparent-musical-ensemble-music-school-art-week-end-logo-computer-wallpaper-classical-music.png","https://open.spotify.com/playlist/1Bh4Tc47H1PLLcBinKfaMT?si=aAV-pw3GTzSGs8DYkZWw9g")
        .addFields(
          {name: '3rd Prototype', value: 'Feels So Good', inline: true},
          {name: 'Unknown Brain', value: 'Waiting', inline: true},
          {name: 'Tiesto & KSHMR ft. Vassy', value: 'Secrets', inline: true},
          {name: 'Raven & Kreyn', value: 'Biscuit', inline: true},
          {name: 'Let the darkness take control ', value: '(ULTIMATE Remix)', inline: true},
          {name: 'Jim Yosef & Sara Skinner', value: 'WILDFIRE', inline: true},
          {name: 'Ed Sheeran', value: 'Shape of you(BYAKE Remix)', inline: true},
          {name: 'Distrion & Electo-Light', value: 'Drakkar', inline: true},
          {name: 'Bvrnout x VOVIII', value: 'Apache', inline: true},
          {name: 'Jim Yosef', value: 'Moonlight', inline: true},
          {name: 'Joey Bada$$', value: 'Devestated(MVMMALS Remix)', inline: true},
          {name: 'Krewella', value: 'Alibi[Far Out Remix]', inline: true},
          {name: 'Marshmello ft. Khalid', value: 'Silence', inline: true},
          {name: 'Marshmello', value: 'Alone', inline: true},
          {name: 'Rain Main ft. OLy', value: 'Bring Back the summer', inline: true},
          {name: 'Retrovision', value: 'Puzzle', inline: true},
          {name: 'Swedish House Mafia', value: 'Don’t You Worry Child', inline: true},
          {name: 'The FatRat', value: 'Mayday', inline: true},
          {name: 'Janji', value: 'Heroes Tonight(ft. Johnning)', inline: true},
          {name: 'Anne Marie', value: '2002[BYAKE Remix]', inline: true},
          {name: 'Avicii', value: ' Wake Me Up', inline: true},
          {name: 'Calvin Harris', value: 'Summer', inline: true},
          {name: 'Diamond Eyes', value: 'Hold ON', inline: true},
          {name: 'Diamond Eyes ', value: 'Stars', inline: true},
          {name: 'Elektromia', value: 'Limitless', inline: true},
          {name: 'Gioni', value: 'Trigger', inline: true},
          
        )
        .setColor(0x344ceb)
        .setFooter("EDMs","https://w7.pngwing.com/pngs/249/967/png-transparent-musical-ensemble-music-school-art-week-end-logo-computer-wallpaper-classical-music.png")
        .setTimestamp();
      message.channel.send(lol);
    }
}