const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.wowdown) {
  client.wowdown = true
    message.react("\u004F")
    message.react("\u006E")
    message.react("\u2705");
  } else {
  client.wowdown = false
    message.react("\u004F")
    message.react("\u006F")
    message.react("\u0066")
    message.react("\u2705");

  }



}
module.exports.help = {
      name: "delete"

  }
