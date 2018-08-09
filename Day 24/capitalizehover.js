function capitalizeHover() {
  selected = document.querySelectorAll("a:hover")
  for (let node of selected) {
    originalContent = node.textContent
    node.textContent = node.textContent.toUpperCase()
    setTimeout(() => node.textContent = originalContent, 500)
  }
}

setInterval(capitalizeHover, 550)
// Temporarily capitalizes any link that is hovered over
