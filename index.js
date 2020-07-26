function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logWhisper(string) {
  console.log(whisper(string))
}

function logShout(string) {
  console.log(shout(string))
}

function sayHiToGrandma(string) {
  return lowerCase(string) || upperCase(string) || loveYou(string)
}

function lowerCase(string) {
  if (string.toLowerCase() === string) {
    return "I can't hear you!"
  }
}

function lowerCase(string) {
  if (string.toLowerCase() === string) return "I can't hear you!"
}

function upperCase(string) {
  if (string.toUpperCase() === string) return "YES INDEED!"
}

function loveYou(string) {
  if (string === 'I love you, Grandma.') return "I love you, too."
}
