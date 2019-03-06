const Discord = require('discord.js');
module.exports = member => {
  let username = member.user.username;
  member.sendMessage('Serverimize Hoşgeldin Yabancı!!! Lütfen Buyur... !!yardım yazmayıda unutma!!!' + username)
  var channel = member.guild.channels.get(member.guild.channels.find("name", "ceteye-katilanlar-cikanlar").id)
  const emb = new Discord.RichEmbed()
  .setDescription(`Hoşgeldin ${member} Brocum Nöghrüyonuz?`)
  .setColor('BLUE')
  .setFooter('NoyanFurkan')
  .setTimestamp()
  channel.send(emb)
}
