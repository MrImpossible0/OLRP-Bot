module.exports = {
    commands: 'daa',
    minArgs: 0,
    maxArgs: 0,
    description: 'Links you to the OLRP Disciplinary Action Appeal Form!',
    callback: (message, arguments, text) => {
      message.reply('https://docs.google.com/forms/d/e/1FAIpQLSc_ggQMMzaylcRofjM-Z0NTFGtufFk-agF2xi778ORT4VIDow/viewform')
    },
  }