const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.wowdown) {
  client.wowdown = true;
  } else {
  client.wowdown = false;
  }
  message.react("\u2705")



}
module.exports.help = {
      name: "deletesome"

  }
