module.exports.run = async (bot, message, args) => {
const title = await bot.awaitReply(message, "Title?", 180000);
const ad = await bot.awaitReply(message, "Ad?", 180000);
const thumbnail = await bot.awaitReply(message, "Thumbnail?", 180000);

message.channel.send(`.custom edit eaa 1 embed:title:"${title}",description:"${ad}",\ncolor:"orange",thumbnail:"${thumbnail}"`)





}
module.exports.help = {
      name: "formatad"

  }
