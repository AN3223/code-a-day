function redHover() {
  selected = document.querySelectorAll(":hover")
  for (let node of selected) {
    node.style.background = "red"
    setTimeout(() => node.style.background = "white", 300)
  }
}

setInterval(redHover, 20)
// Makes the element beneath the cursor temporarily turn red
