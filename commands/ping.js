const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

    const msg = await message.channel.send('Ping!');
      msg.edit(`Pong!${msg.createdTimestamp - message.createdTimestamp} ${Math.round(this.client.ping)}ms.)`);
    
}
module.exports.help = {
    name: "ping"
}
