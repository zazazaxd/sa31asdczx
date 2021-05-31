const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {


  let kişi = message.mentions.members.first()
if(!kişi) {
message.channel.send(`Kimi Öpeceksin? Lütfen Etiketle :hugging:`)                   
return
}
let melyodas = new Discord.MessageEmbed()
.setDescription(`**<@${message.author.id}> Adlı Kişi, <@${kişi.id}> Adlı Kişiyi Öptü!!**`)
.setColor("PİNK")
.setImage("https://cdn.discordapp.com/attachments/765639908450631682/843838126949400586/rkde2aODb.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "öp",
  guildOnly: true,
  aliases: []
};