const Discord = require('discord.js');
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


exports.run = async (client, message) => {
    let korkutma = await message.channel.send({
        embed: {
            color: 0x00AE86,
            description: `${message.author.tag} Herkesi KORKUTTU!`,
            image: {
                url: "https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/27684"
            }
        }
    });

    let korkan = (Math.random() * (60 - 5 +1)) + 5;
    setTimeout(() => {
        korkutma.edit({
            embed: {
                color: 0x00AE86,
                description: `${message.author.tag}, Korkutman ${korkan.toFixed(2)}Milyon Kadar Kişiyi KORKUTTU!.`
            }
        });
    }, 5 * 1000);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'korkut',
  description: 'Insanları Korkut!',
  usage: 'korkut'
};
