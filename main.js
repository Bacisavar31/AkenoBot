const Discord = require('discord.js');
require("dotenv").config()

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });


let bot = {
    client, 
    prefix: "n.",
    owners: ["307574111071240194"]
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)


client.loadEvents(bot, false)
client.loadCommands(bot, false)


module.exports = bot

// client.on("ready", () => {
//     console.log("I'm here Goshujin-sama");
// });

// client.on("messageCreate", (message) => {
//     if (message.content == "hi") {
//         message.reply("Hello")
//     }
// })

const welcomeChat = "948621070502604902"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChat).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

// client.on("guildMemberRemove", async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChat).send({
//         content: `<@${member.id}> Good By!`,
//         files: [img]
//     })
// })

client.login(process.env.TOKEN);