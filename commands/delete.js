const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.wowdown) {
  client.wowdown = true
  client.delchannel = message.channel.id
    message.react(":onswitch:412046075105640448");
  } else {
  client.wowdown = false
  client.delchannel = "None"
    message.react(":offswitch:412046076988882944");

  }



}
module.exports.help = {
      name: "delete"

  }
