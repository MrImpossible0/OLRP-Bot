module.exports = {
    commands: 'devsuggest',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Development Suggestion Forum!',
    callback: (message, arguments, text) => {
      message.reply('https://olrp.invisionservice.com/forum/38-development-suggstions/')
    },
  }