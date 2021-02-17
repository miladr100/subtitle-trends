const { ipcMain } = require("electron")

ipcMain.on("milad", (event, args) => {
  console.log(args)

  event.reply("milad", "pong")
})
