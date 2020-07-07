const {Client, MessageEmbed} = require("discord.js");
const bot = new Client();

const token = "NzAwOTU1NTk0NTcxNjQ0OTQ5.Xpqenw.gmts-BWUS4rukWbXf9DfhYSU63I";

const PREFIX = "*";

bot.on("ready", () => {
  bot.user.setActivity("you type *help for help", {type: "WATCHING"});

  console.log("I am regaining consciousness....");
});

bot.on("message", (message) => {
  let args = message.content.substring(PREFIX.length).split(" ");

  if (!args[0] == "*") return;

  switch (args[0]) {
    case "privacy":
      message.reply("I am chill as fuck homeboy");
      break;

    case "hey":
      message.reply("What's Rollin'?");
      break;

    case "edm":
      const lol = new MessageEmbed()
        .setTitle("Here's The Playlist")
        .setDescription(
          "\n3rd Prototype – Feels So Good\nUnknown Brain -  Waiting\nTiesto & KSHMR feat. Vassy – Secrets\nRaven & Kreyn – Biscuit\nLet the darkness take control (ULTIMATE Remix)\nJim Yosef & Sara Skinner – WILDFIRE\nEd Sheeran – Shape of you(BYAKE Remix)\nDistrion & Electo-Light – Drakkar\nBvrnout x VOVIII -  Apache\nJim Yosef – Moonlight\nJoey Bada$$ - Devestated(MVMMALS Remix)\nKrewella -  Alibi[Far Out Remix]\nMarshmello ft. Khalid – Silence\nMarshmello – Alone\nRain Main ft. OLy -  Bring Back the summer\nRetrovision – Puzzle\nSwedish House Mafia – Don’t You Worry Child\nThe FatRat – Mayday\nJanji – Heroes Tonight(ft. Johnning)\nAnne Marie – 2002[BYAKE Remix]\nAvicii – Wake Me Up\nCalvin Harris – Summer\nDiamond Eyes – Hold ON\nDiamond Eyes – Stars\nElektromia – Limitless\nGioni – Trigger\nDancin[Krono Remix]\nSpoiler by Hyper\nBeautiful lies by vip\nResonance by home"
        )
        .setColor(0x344ceb);
      message.channel.send(lol);
      break;

    case "lofi":
      const son = new MessageEmbed()
        .setTitle("Here are some songs in this category:")
        .setDescription(
          "\nTom Day - Going Home\nTeen Daze - On the edge of a new age\nGeotic - Actually Smiling\nENRA - i have to leave now\nbesu - blue\nThat's Cool - Hold On\nP.s - nostalgic\nＭｏｊｏ - dont\n pettersson - can you feel me now\nCantrip - Shoreside\n im.fine - all you need is time"
        )
        .setColor(0xffa500);
      message.channel.send(son);
      break;

    case "clear":
      if (!args[1])
        return message.reply("You didnt define the second arguement");
      message.channel.bulkDelete(args[1]);
      break;

    case "help":
      const embed = new MessageEmbed()
        .setTitle("I'm Here To Help!")
        .setDescription(
          "These are the commands you can use on me:\n\n*hey:\tJust because I am a Bot, why not share greetings with me?\n\n*edm:\tTo show the list of EDMs you can listen!\n\n*clear:\tAdd a second arguement next to *clear to delete a specific number of messages in a row\n\n*help:\tWell.....\n\n*lofi:\tA Playlist of lofi songs you can listen to!\n\n*privacy:\tLearn about my privacy policies"
        )
        .setColor(0x00ffff);
      message.author.send(embed);
      message.channel.send("Check ya DMs");
      break;

    case "PurgeChat":
      var server = message.guild
      var name = "24-hour-cooldown";

      var role = server.roles.cache.find(r => r.name == "BraveHeart")
      if (!role) {
        message.reply("Roles not set. Contact Admin")
        return
      }
      var botRole = server.roles.cache.find(r => r.name == "Lyron")
      if (!botRole) return

      let oldChannel = server.channels.cache.find(c => c.name == name && c.type == "text")
      if (oldChannel) oldChannel.delete()

      server.channels.create(name, {
        type: 'text',
        nsfw: 'true',
        topic: 'CONTENTS OF THIS CHANNELS IS DELETED EVERY 24 HOURS!USE THIS CHANNEL IN ANY WAY! HAVE FUN!'
      })
        .then(channel => {
          let cat = server.channels.cache.find(c => c.name == "⊰ Dangerous Realms ⊱" && c.type == "category")

          if (!cat) return;
          channel.setParent(cat.id);

          if (role) {
            channel.overwritePermissions([
              {
                id: server.roles.everyone,
                deny: ['VIEW_CHANNEL']
              },
              {
                id: role.id,
                allow: ['VIEW_CHANNEL']
              },
              {
                id: botRole.id,
                allow: ['VIEW_CHANNEL']
              }
            ])
          }
        }).catch(console.error);
      break;

    case "brave":
      var server = message.guild
      var author = server.members.cache.find(member => member.id == message.author.id)
      var role = server.roles.cache.find(r => r.name == "BraveHeart")

      if (!role) {
        message.reply("Roles not set. Contact Admin")
        return
      }
      if (author.roles.cache.find(r => r.name == "BraveHeart")) {
        author.roles.remove(role)
        message.reply("You lost Brave Role Previlage")
      }
      else {
        author.roles.add(role)
        message.reply("You get the Brave Role")
      }
      break;

  }
});

bot.login(token);
