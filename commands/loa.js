module.exports = {
    commands: 'loa',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP LOA Request Forum.',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com/forum/40-leave-of-absence-request/')
    },
  }