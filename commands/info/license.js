const Djs = require('discord.js');

module.exports = {
    name: "lisence",
    aliases: ["li"],
    category: "info",
    description: "show license of goruto",
    run: async (client, message, args) => {
let embed = new Djs.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor("Arasaka License")
      .setDescription(`MIT License
Copyright (c) 2021 Arasaka
`)
      .setFooter(`© RZ Group 2021`);             
     message.channel.send(embed);
    }
}