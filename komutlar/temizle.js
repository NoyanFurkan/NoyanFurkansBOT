const Discord = require('discord.js');


exports.run = function(client, message) {
message.channel.bulkDelete(100);
message.channel.send("100 mesaj sildim").then(msg => {
	msg.delete(5000)
})

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'Belirtilen miktarda mesaj siler',
  usage: 'temizle'
};
