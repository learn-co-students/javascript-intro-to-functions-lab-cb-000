function shout(str) {
  return str.toUpperCase();
}

function logShout(str) {
  console.log(shout(str));
}

function whisper(str) {
  return str.toLowerCase();
}

function logWhisper(str) {
  console.log(whisper(str));
}

function sayHiToGrandma(str) {
  if (str === "I love you, Grandma.") {
    return "I love you, too."
  } else {
    return str === str.toLowerCase() ? "I can't hear you!" : "YES INDEED!";
  }
}
