const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

let melyodas = new Discord.MessageEmbed()
.setDescription(`**<@${message.author.id}> Köpürürsün Gluk Gluk**`)
.setColor("BLUE")
.setImage("https://cdn.discordapp.com/attachments/843764482794324018/844853784554242058/dcd437c0742047ab43711f4b1afd6a7e.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "balıkol",
  guildOnly: true,
  aliases: ["balık-ol"]
};