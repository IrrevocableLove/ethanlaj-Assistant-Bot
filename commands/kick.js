const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kickeduser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kickeduser) return message.channel.send(`${message.author}, Please mention a user!`);
    let kreason = args.join(" ").slice(22);
    if(!kreason) return message.channel.send(`${message.author}, You must provide a reason!`)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author}, You do not have permission to kick members!`);
    if(kickeduser.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author}, You do not have permission to kick this member!`);

    let kicklog = new Discord.RichEmbed()
    .setTitle("Kicked Member")
    .setColor("#000080")
    .addField("Kicked User", kickeduser)
    .addField("Kicked By", message.author)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kreason);

    let kchannel = message.guild.channels.find(`name`, "modlogs");
    message.guild.member(kickeduser).kick(kreason)
    message.channel.send(`${kickeduser} was kicked!`);
    kchannel.send(kicklog)
return;
}

module.exports.help = {
    name: "kick"
}
