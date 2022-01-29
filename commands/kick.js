const { Permissions } = require('discord.js')
const Discord = require('discord.js')

module.exports = {
    commands: 'kick',
    description: 'Kicks the targeted member!',
    callback: (message, args, guild) => {
        const { member, mentions } = message

        const tag = `<@${member.id}>`

        const reason = args.slice(1).join(" ") || "No reason provided."

        const channelKickEmbed = new Discord.MessageEmbed()
        .setTitle(`User Kicked`)
        .setDescription(`${mentions.users.first} was kicked by ${message.author}`)
        .addField(`Reason:`, reason)
        .setThumbnail(`https://o.remove.bg/downloads/02ac7b22-8bf5-4e15-b78d-0e63d87e5226/Kick_Embed_Picture_PNG-removebg-preview.png`)
        .setTimestamp()
        .setFooter(`If you believe that this was a mistake or unjust, contact a member of the Admin Team.`)
        .setColor('YELLOW')

        if (
        member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)
        ) {
            message.delete()
            if (mentions.users.first) {
                const targetMember = message.guild.members.cache.get(mentions.users.first.id)
                targetMember.kick()
                message.channel.send(({embeds: [channelKickEmbed] }))
            } else {
                message.channel.send(`${tag} Please input a user to kick!`)
            }
        } else {
            message.channel.send(
               `${tag} You do not have permission to use this command!`
            )
           }
        }
    }
