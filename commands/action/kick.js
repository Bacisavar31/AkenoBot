module.exports = {
    name: "kick",
    category: "action",
    permissions: [],
    devOnly: true,
    run: async ({client, message, args}) => {
        const member = message.mentions.members.first() || await message.guild.members.cache.get(args[0])

        const reason = "Kicked by Preistess of Thunder"

        if(!member.kickable) {
            message.reply("Sorry Yaman-sama, I don't have the authority")
        }
        else {
            member.kick(reason)
            message.reply("Yes, master.")
        }
    }
}