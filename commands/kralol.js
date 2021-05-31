const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

let melyodas = new Discord.MessageEmbed()
.setDescription(`**<@${message.author.id}> Artık Yeni Kralınızz**`)
.setColor("YELLOW")
.setImage("https://cdn.discordapp.com/attachments/843764482794324018/843791829866381333/tenor.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "kralol",
  guildOnly: true,
  aliases: ["kral-ol"]
};