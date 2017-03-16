function shout(arg){
  return arg.toUpperCase()
}

function whisper(arg){
  return arg.toLowerCase()
}

function logWhisper(arg){
  console.log(arg.toLowerCase())
}

function logShout(arg){
  console.log(arg.toUpperCase())
}

function sayHiToGrandma(arg){
  if(arg.toUpperCase() === arg){
    return "YES INDEED!"
  }
  else if(arg.toLowerCase() === arg){
    return "I can't hear you!"
  }
  return "I love you, too."
}