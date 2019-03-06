const Discord = require('discord.js');


exports.run = function(client, message) {

    message.channel.send("**" + client.ping + "** ms civarlarında PING değerlerine sahibim.");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir',
  usage: 'ping'
};
