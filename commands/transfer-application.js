module.exports = {
    commands: 'transfer',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Transfer Application.',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com/application/form/8-transfer-form/')
    },
  }