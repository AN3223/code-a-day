div = document.createElement("div")
div.textContent = "Hello, I am Mr. Div"
document.body.appendChild(div)
// Simply adding our new div inside the body tag (at the bottom)

textNode = document.createTextNode("Hello, I am a text node")
document.body.appendChild(textNode)
// Same with the textNode

document.body.prepend(div)
// Moving the div above the body
// There are similar methods to this, such as append, before, after,
// and replaceWith. All are pretty self-explanatory.

div.remove()
// Deleting the node

// document.body.removeChild(div)
// Same thing, different syntax
