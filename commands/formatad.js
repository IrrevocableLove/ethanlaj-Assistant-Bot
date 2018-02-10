const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
message.channel.send("Title?")
let title = await client.awaitMessages()
message.channel.send("Ad?")
let ad = await client.awaitMessages()

message.channel.send(`${title}, ${ad}`)





}
module.exports.help = {
      name: "formatad"

  }
