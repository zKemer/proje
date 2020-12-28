const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"

    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setStatus("dnd");
      //idle = boşta
      //dnd = rahatsız etmeyin
      //online = çevrimiçi
      
        client.user.setActivity(oyun[random]);
      }, 2 * 5000); 
  
   console.log(`✨ BOT: Tüm Komutlar Başarıyla Yüklendi`);
  console.log(`🤖 BOT: ${client.user.username} ismi ile giriş yapıldı! | DETAYLAR: ${client.channels.cache.size} adet kanala, ${client.guilds.cache.size} sunucuya ve ${client.users.cache.size} kullanıcıya hizmet veriliyor! | Tarih: [${moment().format('YYYY-MM-DD HH:mm:ss')}]`);
};
