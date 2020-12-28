const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message) => {
   message.channel.send('Espri yükleniyor.').then(message => {
      var espriler = [  db.add(`level_${message.guild.id}_${message.author.id}`, 1),db.add(`level_${message.guild.id}_${message.author.id}`, 31),db.add(`level_${message.guild.id}_${message.author.id}`, 111),db.add(`level_${message.guild.id}_${message.author.id}`, 999),db.add(`level_${message.guild.id}_${message.author.id}`, 9000),db.remove(`level_${message.guild.id}_${message.author.id}`, 1),db.remove(`level_${message.guild.id}_${message.author.id}`, 111)];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`Sana fazladan biraz coin verdik bak bakalım kaç tane vermişiz.`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cf'],
  permLevel: 0
};

exports.help = {
  name: 'cf',
  description: 'Espri yapar.',
  usage: 'espri'
};