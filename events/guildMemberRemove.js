const Discord = require('discord.js');
module.exports = member => {
  let username = member.user.username;
  var channel = member.guild.channels.get(member.guild.channels.find("name", "ceteye-katilanlar-cikanlar").id)
  const emb = new Discord.RichEmbed()
  .setDescription(`Görüşürüz ${member} Brocum. Kendine İyi Bak!!!`)
  .setColor('BLUE')
  .setFooter('NoyanFurkan')
  .setTimestamp()
  channel.send(emb)
}
