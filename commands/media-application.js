module.exports = {
    commands: 'mediaapp',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Media Team Application.',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com/application/form/9-media-application/')
    },
  }