
const Discord = require("discord.js")
const bot = new Discord.Client();

const { token ,PREFIX} = require("./config.json")

// const PREFIX = "*";

const fs = require('fs');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}



bot.on("ready", () => {
  bot.user.setActivity("you type *help", {type: "WATCHING"});

  console.log("I am regaining consciousness....");
});

bot.on("message", (message) => {


  if(!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //method one
  
  if (!bot.commands.has(command)){
    message.reply("Ayy that command doesn't exist.");
  return;}

  try {
    bot.commands.get(command).execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply('there was an error trying to execute that command!');
  }

  //method (zero) 2 [waifu UwU]

  // switch (command) {
  //   case "privacy":
  //     bot.commands.get("privacy").execute(message,args);
  //     break;

  //   case "hey":
  //     bot.commands.get("hey").execute(message,args);
  //     break;

  //   case "edm":
  //     bot.commands.get("edm").execute(message,args);
  //     break;

  //   case "lofi":
  //     bot.commands.get("lofi").execute(message,args);
  //     break;


  //   case "help":
  //     bot.commands.get("help").execute(message,args);
  //     break;

  //   case "purge":
      
  //     bot.commands.get("purge").execute(message,args);
  //     break;

  //   case "brave":
  //     bot.commands.get("brave").execute(message,args);
  //     break;

  // }
});

bot.login(token);
