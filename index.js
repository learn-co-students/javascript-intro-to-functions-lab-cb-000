function shout(string) {
  return(string.toUpperCase())
}

function whisper(string) {
  return(string.toLowerCase())
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var output

  if (string == "I love you, Grandma.") {
    output = "I love you, too."
  } else if (string.toUpperCase() == string) {
    output = "YES INDEED!"
  } else {
    output = "I can't hear you!"
  }

  return output
}
