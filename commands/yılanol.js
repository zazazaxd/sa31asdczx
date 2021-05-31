const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

let melyodas = new Discord.MessageEmbed()
.setDescription(`**Oooaa <@${message.author.id}> Tıss Dedi Adetaa**`)
.setColor("GREEN")
.setImage("https://cdn.discordapp.com/attachments/843764482794324018/844850506047422484/2de08bfb25182efc675938e44fb975ad.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "yılanol",
  guildOnly: true,
  aliases: ["yılan-ol"]
};