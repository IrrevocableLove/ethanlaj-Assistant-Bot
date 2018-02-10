const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
message.channel.send("Title?")
let title = message.channel.awaitMessages()
message.channel.send("Ad?")
let ad = message.channel.awaitMessages()

message.channel.send(`${title}, ${ad}`)





}
module.exports.help = {
      name: "formatad"

  }
