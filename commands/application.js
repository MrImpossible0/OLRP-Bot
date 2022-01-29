module.exports = {
    commands: 'apply',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Community Application.',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com/application/')
    },
  }