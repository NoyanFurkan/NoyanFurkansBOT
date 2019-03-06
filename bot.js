// discord.js yi yüklüyoruz
const Discord = require('discord.js');
const client = new Discord.Client();
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const newUsers = [];
var long = require('long');
require('./util/eventLoader')(client);

var ayip = 'Ayıp Kardeşim Ya!'

const delay = require('delay');
const ayarlar = require('./ayarlar.json')
var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(` ${client.user.tag} : Selamın Aleyküm Nöghrüyonuz!`);
});
const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.lenght} komut yükleniyor...`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`${f} adlı komut yüklendi.`);
    if (props.help && props.help.name){
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
    });
  };
  });
});
client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};


client.on('message', msg =>{
  let yasakli = ['fuck','wtf','fucker','bitch','sik','kaltak','kevaşe','özürlü','am','vajina','yarrak','orospu','sürtük','frick','piç','asshole','suck','dick','bastard','bollocks','balls','chav','kaşar','taşak','taşşak','fahişe','cunt','dickhead','motherfucker','shit','slut','ass','shutup','shut up'];
  let foundInText = false;
  for (var i in yasakli) {
    if(msg.content.toLowerCase().startsWith(yasakli[i].toLowerCase())) foundInText = true;

  }
  if (foundInText) {
    msg.delete();
    msg.channel.send(ayip);
}});
  client.on('message', msg => {
      console.log(`Geçmiş: Server= ${msg.guild.name} Yazan= ${msg.author.tag} Mesaj= ${msg.content}`)
      if (!msg.content.startsWith(prefix)) {
        return;
      }
      //if (msg.content === prefix + 'discord') {
        //msg.reply('İşte discord adresimiz: https://discord.gg/YQJh38H ');
        //return;
      //}
      //if (msg.content === prefix + 'dlive') {
        //msg.reply('NoyanFurkan Dlive Kanalı : https://dlive.tv/NoyanFurkan');
        //return;
      //}
      //if (msg.content === prefix + 'youtube') {
        //msg.reply('NoyanFurkan Youtube Kanalı : https://www.youtube.com/channel/UCqakr5mN7zcfs3bg1KKVPxw');
        //return;
      //}
      //if (msg.content === prefix + 'sa') {
        //msg.reply('Selamın Aleyküm');
        //return;
      //}
      //if (msg.content === prefix + 'omg') {
        //msg.reply('Omen Tonrem Oda NEDİR?');
        //return;
      //}
      //if (msg.content === prefix + 'nbr') {
        //msg.reply('Nöghrüyonuz?');
        //return;
      //}
      //if (msg.content === prefix + 'as') {
        //msg.reply('Aleyküm Selam ');
        //return;
      //}
      //if (msg.content === prefix + 'temizle10') {
        //if (msg.member.hasPermission('KICK_MEMBERS')){
          //msg.channel.bulkDelete(10);
          //msg.channel.sendMessage("Başarılı!")
          //return;
      //} else{
          //msg.channel.sendMessage("Yetkin Yok!")
      //}
      //}
      //if (msg.content === prefix + 'temizle100') {
        //if(msg.member.hasPermission('KICK_MEMBERS')){
          //msg.channel.bulkDelete(100);
          //msg.channel.sendMessage("Başarılı!")
          //return;
      //} else{
          //msg.channel.sendMessage("Yetkin Yok!")
      //}
      //}
      //if (msg.content === prefix + 'pşt25krş') {
        //msg.reply('Gördüğüm en iyi poşet hakkında olan derin anlamlar içeren ve muhteşör sözlere sahip olan şarkı: https://www.youtube.com/watch?v=k1QK-TM42O0');
        //return;
      //}
      //if (msg.content === prefix + '') {
        //msg.reply('');
        //return;
      //}
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 4;
  if (message.author.id === ayarlar.sahip) permlvl = 5;
  return permlvl;
};
var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
// Token girilecek yer!
client.login('NTUxNzE1MTkzOTU3Mzg0MTkz.D11KOA.PeWSRMHDgCZE8_9_Lf0OeKA7OJ8');

//bot : https://discordapp.com/oauth2/authorize?client_id=551715193957384193&scope=bot&permissions=8
//botdenemedc : https://discord.gg/drgtK55
