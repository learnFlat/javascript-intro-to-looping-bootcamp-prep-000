function forLoop(array) {
  for(let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(`I am ${i} strange loop`)
    }
    array.push()
    console.log(`I am ${i} strange loop${i === 0?'':'s'}.`)
  }
}