module.exports = {
    commands: 'dc',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Dual Clan Policy!',
    callback: (message, arguments, text) => {
      message.reply('https://docs.google.com/document/d/1pri2thchQW0vZEHA5CmEcz6hWlBQNhxjHJLi-LKbaTY/edit')
    },
  }