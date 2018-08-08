cssSelector = ".content > article:nth-child(1) > div:nth-child(3) > h2:nth-child(30)"
result = document.querySelector(cssSelector)
alert(result.innerHTML)
// Selecting by CSS selector

cssSelector = ".font-test"
collection = document.querySelectorAll(cssSelector)
alert(collection[0].innerHTML)
// Selects all of the tags with the class "font-test", then shows just the first one

alert(collection[0].matches(cssSelector))  // true
// Checks if an element matches a CSS selector
