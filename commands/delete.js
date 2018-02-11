const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.wowdown) {
  client.wowdown = true
    message.react("<:onswitch:412046075105640448>
");
  } else {
  client.wowdown = false
    message.react("<:offswitch:412046076988882944>
");

  }



}
module.exports.help = {
      name: "delete"

  }
