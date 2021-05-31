const Discord = require("discord.js"),
client = new Discord.Client();
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
const config = require('../config.js')
 module.exports.run = async (client, message, args) => {
if(message.author.id !== "543549211057061888") return;
const seksizaman = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter("Mause", client.user.avatarURL())
    .addField("<a:yldz:844575884513247262> **Botun Sahibi**", "<@543549211057061888>,<@409383730365595670>")

    .addField("<a:yldz:844575884513247262> **Geliştiriciler**", "<@803690728856748032>")

    .addField("<a:yldz:844575884513247262> **Gecikme süreleri**","Mesaj Gecikmesi: {ping1} ms \nBot Gecikmesi: {ping2} ms"

        .replace("{ping1}", new Date().getTime() - message.createdTimestamp)
        .replace("{ping2}", client.ws.ping),true)
    .addField("<a:yldz:844575884513247262> **Bellek kullanımı**",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB",true)

    .addField("<a:yldz:844575884513247262> **Çalışma süresi**", seksizaman, true)

    .addField("<a:yldz:844575884513247262> **Kullanıcılar**",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)

    .addField("<a:yldz:844575884513247262> **Sunucular**", client.guilds.cache.size.toLocaleString(), true)

    .addField("<a:yldz:844575884513247262> **Kanallar**", client.channels.cache.size.toLocaleString(), true)

    .addField("<a:yldz:844575884513247262> **Discord.JS sürüm**", "v" + Discord.version, true)

    .addField("<a:yldz:844575884513247262> **Node.JS sürüm**", `${process.version}`, true)

    .addField("<a:yldz:844575884513247262> **CPU**",`\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``,true)

    .addField("<a:yldz:844575884513247262> **Bit**", `\`${os.arch()}\``, true)

    .addField("<a:yldz:844575884513247262> **İşletim Sistemi**", `\`\`${os.platform()}\`\``, true)

  return message.channel.send(istatistikler);
};

exports.config = {
  name: "istatistik",
  guildOnly: true,
  aliases: ["i"],                     
};