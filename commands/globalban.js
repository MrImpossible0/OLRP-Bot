const { MessageEmbed } = require("discord.js");
const { Permissions } = require('discord.js')

module.exports = {
    commands: ["globalban", "gb"],
    description: "bans the user from all servers the bot is in",
    execute(message, args, client){

        const targetID = args[0];
        const reason = args.slice(0).join(' ')
        if(!member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)) return message.channel.send("You are not authorized to use this command.");
        
        
        else{
        client.guilds.cache.forEach(a => a.members.cache.get(targetID).ban())
        const embed = new MessageEmbed()
        .setTitle(`Successfully banned`)
        .setDescription(`I have successfully banned ${targetID.tag} from all OLRP Assets`)
        .setColor("#FF0000")
        .setThumbnail("https://cdn.discordapp.com/emojis/764396593964122132.gif?v=1")
        message.channel.send(embed)

        const dmembed = new MessageEmbed()
        .setTitle("You have been banned from all OLRP Assets.")
        .setDescription(`Your offense was ${reason}. If you think this was a mistake, fill out the Ban Appeal Form: https://docs.google.com/forms/d/18vFhoj7bpiE_KAZCuWgRuEEZ-sNR_a9J1O54II0j3_o/viewform?edit_requested=true`)
        .setColor("#FF0000")
        message.targetID.send(embed)
        }
    }
}