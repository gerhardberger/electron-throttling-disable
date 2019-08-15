function loop () {
  let start = Date.now()
  setInterval(() => {
    let delta = Date.now() - start
    start = Date.now()
    if (delta > 1000) {
      console.error('Time since last animation frame exceeds 1s:', delta);
    }
  }, 200)
}

loop()
