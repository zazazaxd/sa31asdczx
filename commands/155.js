const Discord = require('discord.js');
const ayarlar = require('../config.js');

exports.run = (client, message, params) => {
if(message.member.user.bot) return;
    if (!message.guild) {
    const melyodas = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    return message.author.send(melyodas); }
    if (message.channel.type !== 'dm') {
      const melyodas = new Discord.MessageEmbed()
    .setAuthor(message.author.username + "  DADİ DADİ POLİS EMRE GELDİ")
    .setColor('BLACK')
    .setTimestamp()
    .setDescription('')
    .setImage(`https://cdn.discordapp.com/attachments/847410171282063361/847474813194338334/9e97fc7736c9093308512cddea19f99e.gif`)
    return message.channel.send(melyodas);
    }
};

exports.config = {
  name: '155',
  aliases: []
};