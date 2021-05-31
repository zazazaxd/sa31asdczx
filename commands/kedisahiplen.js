const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {


  let kişi = message.mentions.members.first()
if(!kişi) {
message.channel.send(`Kimi Kedi Olarak Sahipleniceksin? Lütfen Etiketle :hugging:`)                   
return
}
let melyodas = new Discord.MessageEmbed()
.setDescription(`**<@${message.author.id}> Adlı Kişi, <@${kişi.id}> Adlı Kediyi Sahiplendi!!**`)
.setColor("WHİTE")
.setImage("https://cdn.discordapp.com/attachments/843808548822581278/843815473271144478/funny-cat-gif-to-make-you-happy_1.gif")
message.channel.send(melyodas)
};

exports.config = {
  name: "kedisahiplen",
  guildOnly: true,
  aliases: ["kedi-sahiplen"]
};