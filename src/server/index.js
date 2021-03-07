const { ipcMain } = require("electron")

import pathsToRows from "./pathsToRow"
import prepareData from "./prepareData"
import groupWords from "./groupWords"

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then(rows => prepareData(rows))
    .then(words => groupWords(words))
    // .then(() => {
    //   event.reply("process-subtitles", [
    //     { name: "you", amount: 900 },
    //     { name: "i", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "she", amount: 900 },
    //     { name: "it", amount: 900 }
    //   ])
    // })
    .then(groupedWords => event.reply("process-subtitles", groupedWords))
})
