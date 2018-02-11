const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(!client.afk) {
  client.afk = true
  let afkstat = args.join(" ")
  client.afkmsg = `**ethanlaj's AFK Message:** ${afkstat}`
  message.react(":onswitch:412046075105640448")
  } else {
  client.afk = false;
  message.react(":offswitch:412046076988882944")
  }



}
module.exports.help = {
      name: "afk"

  }
