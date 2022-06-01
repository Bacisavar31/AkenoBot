const { MessageEmbed } = require('discord.js');
 
module.exports = {
    name: "avatar",
    category: "action",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        let user = message.mentions.user.first() || client.users.cache.get(args[0]) || message.author;

        let embed = new MessageEmbed()
        .setTitle(`${user.username}'s avatar`)

        .addField('PNG', `[Link](${user.displayAvatarURL({ size:4096, dynamic: true, format: "png" })})`, true)
        .addField('JPG', `[Link](${user.displayAvatarURL({ size:4096, dynamic: true, format: "jpg" })})`, true)
        .addField('WEBP', `[Link](${user.displayAvatarURL({ size:4096, dynamic: true, format: "webp" })})`, true)

        .setImage(user.displayAvatarURL({ size:4096, dynamic: true }))
        .setTimestamp()
        message.channel.send({ embeds: [embed] })
    }
}