const Discord = require('discord.js');
const { Command } = require('discord.js-commando');
const { stripIndents } = require('common-tags');
const slots = ['💰', '💎', '💳', '🍒', '🍋'];

exports.run = function(client, message) {

	var slot1 = slots[Math.floor(Math.random() * slots.length)];
	var slot2 = slots[Math.floor(Math.random() * slots.length)];
	var slot3 = slots[Math.floor(Math.random() * slots.length)];

	if (slot1 === slot2 && slot1 === slot3) {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Usta Bu Çocukta şans var ha! gel bunu Reşatın Mekana Götürek!
		`);
	} else {
		message.channel.send(stripIndents`
		${slot1} : ${slot2} : ${slot3}
		Agaa beee, kaybettin!
		`);
	}

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'slotcevir',
  description: 'Slot Çevirmeni Sağlayan Oyun :D',
  usage: 'slotcevir'
};
