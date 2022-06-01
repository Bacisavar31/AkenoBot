const Discord = require('discord.js');

module.exports = {
    name: "master",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async ({client, message, args}) => {
        message.channel.send("My master is Yaman-sama also known as Bacisavar31")
    }
}