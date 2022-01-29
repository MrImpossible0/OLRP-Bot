module.exports = {
    commands: 'website',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Website!',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com')
    },
  }