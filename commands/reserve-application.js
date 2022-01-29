module.exports = {
    commands: 'reserveapp',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Reserve Applications.',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com/application/')
    },
  }