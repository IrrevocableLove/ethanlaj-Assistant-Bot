const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  let afkstat = args.join(" ")
  if(!afkstat) {
  client.afk = false;
  message.react(":offswitch:412046076988882944")
  } else {
  client.afk = true
  client.afkmsg = `**ethanlaj's AFK Message:** ${afkstat}`
  message.react(":onswitch:412046075105640448")
  }



}
module.exports.help = {
      name: "afk"

  }
