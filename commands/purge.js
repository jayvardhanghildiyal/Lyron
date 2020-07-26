const Discord = require("discord.js");

module.exports = {
    name : "purge",
    descriptiom : "i mean cmon.....",
    execute(message,args){
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
    }
}