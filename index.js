const botconfig = require("./botconfig.js");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.wowdown = false;
bot.afk = false;
bot.afkmsg = "ethanlaj is AFK"
bot.gtc = false;
bot.delchannel = "None"
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f,i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("ethanlaj", {type: "LISTENING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

//let ethanlaj = bot.fetchUser("245877990938902529")

 
if((bot.wowdown) && (message.channel.id === bot.delchannel) && (message.author.id !== "245877990938902529")){
message.delete()
}
if((bot.afk) && (message.isMentioned("245877990938902529") === true)){
message.channel.send(bot.afkmsg)
}
if(bot.gtc) {
  message.channel.send("<@289380085025472523>")

}

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

if(!message.content.startsWith(botconfig.prefix)) return;
let commandfile = bot.commands.get(cmd.slice(prefix.length));
if(message.author.id === "245877990938902529") return commandfile.run(bot, message, args);




})




bot.login(botconfig.token);
