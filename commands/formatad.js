const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const title = await client.awaitMessage(message, "Title?", 180000);
const ad = await client.awaitMessage(message, "Ad?", 180000);

message.channel.send(`${title}, ${ad}`)





}
module.exports.help = {
      name: "formatad"

  }
