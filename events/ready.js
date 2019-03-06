const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] NoyanFurkansBOT : Komutlar Başarıyla Yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] NoyanFurkansBOT : ${client.user.username} gardaşım giriş yaptı!`);
  client.user.setStatus("dnd");
  client.user.setGame(`${prefix}yardım ile komutlar!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] NoyanFurkansBOT : Oyunumuzun ismi hazır!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] NoyanFurkansBOT : Şimdilik ` + client.channels.size +`tane kanalda aktif gözüküyor!`);
}
