module.exports.run = async (bot, message, args) => {
  let rolename = args.join(" ").toLowerCase();
  const prefixes = ["", "-g- ", "[f] ", "[c] "];

  for (const prefix of prefixes) {
    let role = message.guild.roles.find(r=> r.name.toLowerCase() === prefix+rolename);
    if(role) role.setMentionable(!role.mentionable);
  }
  message.delete()
};

module.exports.help = {
  name: "mt"
};
