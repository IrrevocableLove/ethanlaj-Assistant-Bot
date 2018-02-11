const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!buser) return message.channel.send(`${message.author}, Please mention a user!`);
   
   
    

    message.guild.member(buser).kick()
    message.react("\u2705")
return;
}

module.exports.help = {
    name: "ban"
}
