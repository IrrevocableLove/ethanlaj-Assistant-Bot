const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.wowdown) {
  client.wowdown = true
    message.react("\u2705");
  } else {
  client.wowdown = false
    message.react(":x:");

  }



}
module.exports.help = {
      name: "delete"

  }
