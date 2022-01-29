const Discord = require('discord.js')
const config = require('./config.json')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const scalingChannels = require('./scaling-channels')
const scalingChannels2 = require('./scaling-channels2')
const loadCommands = require('./commands/load-commands')
const command = require('./command')
const advancedPolls = require('./advanced-polls')

client.on('ready', async () => {
  console.log('The client is ready!')
  client.user.setActivity('with Christian')

  loadCommands(client)

  advancedPolls(client)

  scalingChannels(client)

  scalingChannels2(client)
})

client.on('guildMemberAdd', guildMember =>{
  const welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'OLRP Fan');

  guildMember.roles.add(welcomeRole);
  guildMember.guild.channels.cache.get('844426724539498536').reply(`Welcome <@${guildMember.user.id}> to Ocean Life Roleplay! If you're interested, head on over to https://olrp.invisionservice.com/application/ to apply! We hope you enjoy your stay!`)
})

client.login(config.token)