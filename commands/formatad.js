const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
const title = await bot.awaitMessage(message, "Title?", 180000);
const ad = await bot.awaitMessage(message, "Ad?", 180000);

message.channel.send(`${title}, ${ad}`)





}
module.exports.help = {
      name: "formatad"

  }
