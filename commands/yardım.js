const Discord = require("discord.js"),
client = new Discord.Client();
const config = require('../config.js')
module.exports.run = async (client, message, args) => {


  
  let pages = ['1' , '2'];
  let page = 1;
  
  const embed = new Discord.MessageEmbed()
  .setColor(config.renk)
  .setFooter(`Sayfa ${page}  |  ${pages.length}`)
  .setDescription(`<a:aakelebekk:819134281934307348> **__Komutlar Sayfa 1__** <a:aakelebekk:819134281934307348>\n <a:kirmizi:758392846322499634>・**!kralol** : Sizi Kral Yapar\n<a:kirmizi:758392846322499634>・**!balıkol** : Sizi Balık Yapar \n <a:kirmizi:758392846322499634>・**!yılanol** : Sizi Yılan Yapar\n <a:kirmizi:758392846322499634>・**!öp** : Etiketlediginiz Kişiyi Öpersiniz\n <a:kirmizi:758392846322499634>・**!sarıl** : Etiketlediginiz Kişiye Sarılırsınız\n <a:kirmizi:758392846322499634>・**!köpeksahiplen** : Etiketlediginiz Kişiyi Köpek Olarak Sahiplenirsiniz\n <a:kirmizi:758392846322499634>・**!kedisahiplen** : Etiketlediginiz Kişiyi Kedi Olarak Sahiplenirsiniz\n<a:kirmizi:758392846322499634>・**!kafasına-sık** : Etiketlediginiz Kişinin Kafasına Sıkmayı Denersiniz\n <a:kirmizi:758392846322499634>・**!155** : Polis Çağırırsınız\n <a:kirmizi:758392846322499634>・**!112** : Ambulans Çağırırsınız

Bir Sonraki Sayfa İçin : ⏩
Bir Önceki Sayfa İçin :  ⏪`)
 
  message.channel.send(embed).then(msg => {
    
    msg.react('⏪').then( r  =>{
    msg.react('⏩') 
      
    const backwardsFilter = (reaction , user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
    const forwardsFilter = (reaction , user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
    const backwards = msg.createReactionCollector(backwardsFilter, {time: 60000}); 
    const forwards = msg.createReactionCollector(forwardsFilter, {time: 60000}); 
      
     backwards.on('collect', r => {
     if (page === 1) return;
     page--;
 embed.setDescription(`<a:aakelebekk:819134281934307348> **__Komutlar Sayfa 1__** <a:aakelebekk:819134281934307348>\n <a:kirmizi:758392846322499634>・**!kralol** : Sizi Kral Yapar\n<a:kirmizi:758392846322499634>・**!balıkol** : Sizi Balık Yapar \n <a:kirmizi:758392846322499634>・**!yılanol** : Sizi Yılan Yapar\n <a:kirmizi:758392846322499634>・**!öp** : Etiketlediginiz Kişiyi Öpersiniz\n <a:kirmizi:758392846322499634>・**!sarıl** : Etiketlediginiz Kişiye Sarılırsınız\n <a:kirmizi:758392846322499634>・**!köpeksahiplen** : Etiketlediginiz Kişiyi Köpek Olarak Sahiplenirsiniz\n <a:kirmizi:758392846322499634>・**!kedisahiplen** : Etiketlediginiz Kişiyi Kedi Olarak Sahiplenirsiniz\n<a:kirmizi:758392846322499634>・**!kafasına-sık** : Etiketlediginiz Kişinin Kafasına Sıkmayı Denersiniz\n <a:kirmizi:758392846322499634>・**!155** : Polis Çağırırsınız\n <a:kirmizi:758392846322499634>・**!112** : Ambulans Çağırırsınız

Bir Sonraki Sayfa İçin : ⏩
Bir Önceki Sayfa İçin :  ⏪`);
     embed.setFooter(`Sayfa ${page}  |  ${pages.length}`)
     embed.setColor(config.renk)
     msg.edit(embed)
     }) 
      
     forwards.on('collect', r => {
     if (page === pages.length) return;
     page++;
     embed.setDescription(`<a:aakelebekk:819134281934307348> **__Komutlar Sayfa 2__** <a:aakelebekk:819134281934307348>\n <a:kirmizi:758392846322499634> **!davet** : Botun Davet Linkleri.

Bir Sonraki Sayfa İçin : ⏩
Bir Önceki Sayfa İçin :  ⏪`);
     embed.setFooter(`Sayfa ${page}  |  ${pages.length}`)
      embed.setColor(config.renk)
     msg.edit(embed)
     }) 
      
    })
    
  })
};

exports.config = {
  name: "yardım",
  guildOnly: true,
  aliases: ["yardim","help"]
};