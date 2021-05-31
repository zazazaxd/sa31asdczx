const Discord = require('discord.js');
exports.run = (client, message, args) => {
if(message.member.user.bot) return;
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()  
.setColor("RED")
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Kimin kafasına sıkacağını yazmalısın.').catch(console.error);
    message.channel.send('Kafasına sıkılıyor....')
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
      .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
      .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
     var Random = [
      'Tam isabet!!!',
      'Iskaladın tekrar dene.',
    ];
    var kafasınasık = Math.floor(Math.random()*Random.length);
};

exports.config = {
  name: 'kafasınasık',
  aliases: ["kafasına-sık"]
};