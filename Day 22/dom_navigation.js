for (let i = 0; i < document.body.childNodes.length; i++) {
  alert(document.body.childNodes[i])
  alert(document.body.childNodes[i].parentNode)
  alert(document.body.childNodes[i].nextSibling)
  alert(document.body.childNodes[i].previousSibling)
}
// Traversing the DOM

alert(document.body.firstChild)  // First node
alert(document.body.lastChild)  // Last node

for (let i = 0; i < document.body.children.length; i++) {
  alert(document.body.children[i])
  alert(document.body.children[i].parentElementNode)
  alert(document.body.children[i].nextElementSibling)
  alert(document.body.children[i].previousElementSibling)
}

alert(document.body.firstElementChild)
alert(document.body.lastElementChild)
// Traversing the DOM only by element nodes, ignoring text and comment nodes

// The point of "parentElementNode" is when you're traversing upwards you will
// eventually hit the level of "document", and parentNode would just give you
// the document node, while parentElementNode will not.
