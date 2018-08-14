selector = ".content > article:nth-child(1) > div:nth-child(3) > dl:nth-child(72) > dt:nth-child(1)"
elem = document.querySelector(selector)
elem.addEventListener("click", (event) => alert("Hi, you called?"))

class EventHandler {
  handleEvent(event) {
    alert("Hi, you called?")
  }
}

let eventhandler = new EventHandler()
elem.addEventListener("click", eventhandler)
// Same thing, different syntax.
