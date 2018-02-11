const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.cooldown) {
  client.cooldown = true;
  } else {
  client.cooldown = false;
  }
  message.react("\u2705")



}
module.exports.help = {
      name: "deleteall"

  }
