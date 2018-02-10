const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send("Title?")
let ad = message.channel.awaitMessages()
message.channel.send("Ad?")
let ad = message.channel.awaitMessages()


message.channel.send(`${title}, ${ad}`)





}
module.exports.help = {
      name: "formatad"

  }
