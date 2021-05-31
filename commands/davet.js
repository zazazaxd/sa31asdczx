const Discord = require("discord.js"),
client = new Discord.Client();
const config = require('../config.js')
module.exports.run = async (client, message, args) => {


  const melyodas = new  Discord.MessageEmbed()
melyodas.setDescription(`[**__Davet Linkim__**](https://discord.com/oauth2/authorize?client_id=558929348175069195&scope=bot&permissions=8)  |  **__[Destek Sunucusu](https://discord.gg/BhJY9PTuc8)__**`)
.setColor(config.renk)
message.channel.send(melyodas)

};

exports.config = {
  name: "davet",
  guildOnly: true,
  aliases: ["invite","link"],                     
};