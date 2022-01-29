module.exports = {
    commands: 'discords',
    minArgs: 0,
    maxArgs: 0,
    description: 'Lists all of the OLRP Official Discords',
    callback: (message, arguments, text) => {
    if(message.member.roles.cache.has('815995772855910441')){
        message.reply('**SACD Discord** - https://discord.gg/G6RDF3X6nj **LSPD Discord** - https://discord.gg/XUDbdQYdZV **BCSO Discord** - https://discord.gg/KrTRCsaZ28 **SAHP Discord** - https://discord.gg/fWtWH26ypA **Civilian Discord** - https://discord.gg/SaJ3zuDbYH **SAFR Discord** - https://discord.gg/WKECNzR7Kt')
    } else {
        message.channel.send('You do not have permission to use this command.')
    }
    },
  }