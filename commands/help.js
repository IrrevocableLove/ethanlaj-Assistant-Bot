const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let helper = new Discord.RichEmbed()
  .setTitle("Commands")
  .addField("botinfo", "Displays information about the bot")
  .addField("serverinfo", "Displays information about the server")
  .addField("memberid", "Displays a member ID")
  .addField("channelid", "Displays the channel ID")
  .addField("serverid", "Displays the servers ID")
  .addField("inviteinfo", "Displays information about an invite")
  .addField("servericon", "Sends a link to a server's current thumbnail")
  .addField("mbrotimead", "Sends a mobile friendly version of the Bro Time ad")
  .addField("cbrotimead", "Sends a computer friendly version of the Bro Time ad")
  .addField("typeon", "Starts typing in the current channel")
  .addField("typeoff", "Stops typing in the current channel")
  .addField("memberpfp", "Sends a link to a user's profile picture")
  .addField("formatad", "Formats an partner message")
  .addField("delete", "Enables/disables deletion of all messages in a channel")
  .addField("pingmsg", "Changes/enables/disables message sent when you are pinged");





  message.react("\u2705")
  message.author.send(helper)
}
module.exports.help = {
    name: "help"
}
