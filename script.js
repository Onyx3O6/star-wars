window.addEventListener("DOMContentLoaded", (event) => {
  let mus = document.getElementById("myAudio")
  function playMus() {
    mus.play()
  }
  setInterval(playMus, 5000)
})
