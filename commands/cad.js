module.exports = {
    commands: 'cad',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP CAD!',
    callback: (message, arguments, text) => {
      message.reply('https://sonorancad.com/#/community/menu The community code is "OLRP".')
    },
  }