const Discord = require("discord.js");
const config = require('../config.js');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `!yardım | !help`}, status: 'dnd' })
 console.log(`petrikin annesini si xd`)
};

// Type kısımları:
// WATCHING - İZLİYOR
// PLAYING - OYNUYOR
// LISTENING - DİNLİYOR

// Status kısımları:
// online - çevrim içi
// idle - boşta
// dnd - rahatsız etmeyin

// name kısmına oynuyorunuzu yazabilirsiniz.
