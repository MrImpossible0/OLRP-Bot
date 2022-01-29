const { Permissions } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    commands: 'ban',
    description: 'Bans the targeted member!',
    callback: (message, args, client, text) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const reason = args.slice(1).join(" ") || "No reason provided."

        const channelBanEmbed = new Discord.MessageEmbed()
        .setTitle(`User Banned`)
        .setDescription(`${mentions.users.first} was banned by ${message.author}`)
        .addField(`Reason:`, reason)
        .setThumbnail(`https://o.remove.bg/downloads/5d3f1788-46ea-4ca9-889d-96f251dc46c9/Ban_Embed_Picture_PNG-removebg-preview.png`)
        .setTimestamp()
        .setFooter(`If you believe that this was a mistake or unjust, fill out a Disciplinary Action Appeal Form`)
        .setColor('RED')

        if (
        member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)
        ) {
            message.delete()
            if (mentions.users.first) {
                const targetMember = message.guild.members.cache.get(mentions.users.first.id)
                targetMember.ban()
                message.channel.send(channelBanEmbed)
            } else {
                message.channel.send(`${tag} Please input a user to ban!`)
            }
        } else {
         message.channel.send(
            `${tag} You do not have permission to use this command!`
         )
        }
    }
}