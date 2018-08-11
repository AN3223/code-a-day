document.body.classList.add("hello")
// Add a class to the body element

document.body.classList.remove("hello")
// Remove the class from the body element

document.body.style.backgroundColor = "red"
document.body.style.backgroundColor = "white"
// We should already know about these

document.body.style.margin = "10%"
document.body.style.margin = "10px"
document.body.style.margin = ""
// Margin takes a string, since different united may be used

style = getComputedStyle(document.body)
alert(style.color)  // Shows the color value
// "getComputedStyle" is the preferred way of reading style a attributes

