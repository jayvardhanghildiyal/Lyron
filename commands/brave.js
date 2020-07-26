const Discord = require("discord.js");

module.exports = {
    name : "brave",
    descriptiom : "you get this if you yeet your meat to the beat",
    execute(message,args){
        var server = message.guild
        var author = server.members.cache.find(member => member.id == message.author.id)
        var role = server.roles.cache.find(r => r.name == "BraveHeart")
  
        if (!role) {
          message.reply("Roles not set. Contact Admin")
          return
        }
        if (author.roles.cache.find(r => r.name == "BraveHeart")) {
          message.reply("You lost Brave Role Previlage");
          author.roles.remove(role)
        }
        else {
          author.roles.add(role)
          message.reply("You get the Brave Role")
        }
    }
}