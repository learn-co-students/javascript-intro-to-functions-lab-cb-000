function shout(greeting) {
  return greeting.toUpperCase();
}

function whisper(greeting) {
  return greeting.toLowerCase();
}

function logShout(greeting) {
  console.log(greeting.toUpperCase());
}

function logWhisper(greeting) {
  console.log(greeting.toLowerCase());
}

function sayHiToGrandma(greeting) {
  var uppercase = shout(greeting);
  var lowercase = whisper(greeting);

  if (greeting === lowercase) {
    return "I can't hear you!";
  } else if (greeting === uppercase) {
    return "YES INDEED!";
  } else if (greeting === "I love you, Grandma.") {
    return "I love you, too.";
  }
}
