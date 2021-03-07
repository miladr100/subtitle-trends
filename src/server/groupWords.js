module.exports = words => {
  return new Promise((resolve, reject) => {
    try {
      const wordsWithoutNumbers = words.filter(removeNumbers)
      const groupedWords = wordsWithoutNumbers.reduce(countWords, {})
      const groupedWordsArray = formatGroupedWords(groupedWords)
      const orderedWords = orderWords(groupedWordsArray)
      resolve(orderedWords)
    } catch (err) {
      reject(err)
    }
  })
}

const countWords = (obj, word) => {
  if (obj[word]) {
    obj[word] = obj[word] + 1
  } else {
    obj[word] = 1
  }
  return obj
}

function formatGroupedWords(groupedWords) {
  return Object.keys(groupedWords).map(key => ({
    name: key,
    amount: groupedWords[key]
  }))
}

const removeNumbers = word => !parseInt(word) && parseInt(word) != 0

function orderWords(words) {
  return words.sort((w1, w2) => w2.amount - w1.amount)
}
