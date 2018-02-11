const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!buser) return message.channel.send(`${message.author}, You must mention a user!`);
    let breason = args.join(" ").slice(22);
    if(!breason) return message.channel.send(`${message.author}, You must provide a reason!`)
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}, You do not have permission to ban members!`);
    if(buser.hasPermission("BAN_MEMBERS")) return message.channel.send(`${message.author}, You do not have permission to ban this member!`);

    let banlog = new Discord.RichEmbed()
    .setTitle("Banned Member")
    .setColor("#000080")
    .addField("Banned User", buser)
    .addField("Banned By", message.author)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", breason);

    let bchannel = message.guild.channels.find(`name`, "modlogs");
    message.guild.member(buser).ban(breason)
    message.channel.send(`${buser} was banned!`);
    bchannel.send(banlog)
return;
}

module.exports.help = {
    name: "ban"
}
