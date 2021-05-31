const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {


  let kişi = message.mentions.members.first()
if(!kişi) {
message.channel.send(`Kime Sarılacaksın? Lütfen Etiketle :hugging:`)                   
return
}
let melyodas = new Discord.MessageEmbed()
.setDescription(`**<@${message.author.id}> Adlı Kişi, <@${kişi.id}> Adlı Kişiye Sarıldı!!**`)
.setColor("BLACK")
.setImage("https://store.donanimhaber.com/57/85/f8/5785f80ff64c21bd423d0fe579cce595.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "sarıl",
  guildOnly: true,
  aliases: []
};