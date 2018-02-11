const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kickeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kickeduser) return message.channel.send(`${message.author}, Please mention a user!`);
   
   
    

    message.guild.member(kickeduser).kick()
    message.react("\u2705")
return;
}

module.exports.help = {
    name: "kick"
}
