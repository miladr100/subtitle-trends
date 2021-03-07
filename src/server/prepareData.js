module.exports = rows => {
  return new Promise((resolve, reject) => {
    try {
      const words = rows
        .filter(filterValidRow)
        .map(removePonctuation)
        .map(removeTags)
        .reduce(mergeRows)
        .split(" ")
        .map(wordToLowerCaseAndremoveQuotations)
      resolve(words)
    } catch (err) {
      reject(err)
    }
  })
}

const filterValidRow = row => {
  const isNotNumber = !parseInt(row.trim())
  const isNotEmpty = !!row.trim()
  const isNotInterval = !row.includes("-->")
  return isNotNumber && isNotEmpty && isNotInterval
}

const removePonctuation = row => row.replace(/[,?!.-]/g, "")
const removeTags = row => row.replace(/(<[^>]+)/g, "").trim()
const mergeRows = (fullText, row) => `${fullText} ${row}`
const wordToLowerCaseAndremoveQuotations = word =>
  word
    .toLowerCase()
    .replace('"', "")
    .replace(/'/g, "")
