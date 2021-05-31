const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {


  let kişi = message.mentions.members.first()
if(!kişi) {
message.channel.send(`Kimi Köpek Olarak Sahipleniceksin? Lütfen Etiketle :hugging:`)                   
return
}
let melyodas = new Discord.MessageEmbed()
.setDescription(`**<@${message.author.id}> Adlı Kişi, <@${kişi.id}> Adlı Köpeği Sahiplendi!!**`)
.setColor("GREEN")
.setImage("https://cdn.discordapp.com/attachments/816317956791336961/843811917743128576/s-2f67b1dc30c823cbb4b2105eb9efe2872d79bd9f.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "köpeksahiplen",
  guildOnly: true,
  aliases: ["köpek-sahiplen"]
};