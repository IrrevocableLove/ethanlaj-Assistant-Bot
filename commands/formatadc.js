async function awaitReply(message,question, limit = 60000){
    const filter = m => m.author.id === message.author.id;
    await message.channel.send(question);
    try {
      const collected = await message.channel.awaitMessages(filter, { max: 1, time: limit, errors: ['time'] });
      return collected.first().content;
    } catch (error) {
      console.log(error)
      return false;
    }
  }



module.exports.run = async (bot, message, args) => {
   const title = await awaitReply(message, "Title?", 180000);
   const ad = await awaitReply(message, "Ad?", 180000);
   const image = await awaitReply(message, "Thumbnail?", 180000);

   message.channel.send(`.custom edit eaa 1 embed:title:"${title}",description:"${ad}",\ncolor:"orange",thumbnail:"${image}"`)
}
module.exports.help = {
      name: "formatadc"

  }
