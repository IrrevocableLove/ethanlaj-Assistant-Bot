const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const filter = m => m.author = message.author
message.channel.send("Title?")
let title = message.channel.awaitMessages(filter, {max:1, time:180000})
message.channel.send("Ad?")
let ad = message.channel.awaitMessages(filter, {max:1, time:180000})

message.channel.send(`${title}, ${ad}`)





}
module.exports.help = {
      name: "formatad"

  }
