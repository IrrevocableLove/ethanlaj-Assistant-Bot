module.exports.run = async (bot, message, args) => {
let required = "245877990938902529"
if (message.author.id!==required) {
      return message.channel.send("You're not authorized!");
}
const filter = m=>m.author.id = "245877990938902529"
const title = await bot.awaitReply(message, "Title?", 180000);
const ad = await bot.awaitReply(message, "Ad?", 180000);
const thumbnail = await bot.awaitReply(message, "Thumbnail?", 180000);

message.channel.send(`.custom edit eaa 1 embed:title:"${title}",description:"${ad}",\ncolor:"orange",thumbnail:"${thumbnail}"`)





}
module.exports.help = {
      name: "formatad"

  }
