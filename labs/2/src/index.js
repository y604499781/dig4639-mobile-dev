import Card from "./components/Card/index.js"
let element;

function runOnLoad()
{
    // Create a container for us
    element = document.createElement("div");
    element.id = "container";
    document.body.appendChild(element);

    var head = new Card({content:"WEBPACK CONCEPTS"});
    element.appendChild(head.render());
    var newCard1 = new Card({content:"Entry: The script that the dependency graph starts at when looking for imports"});
    element.appendChild(newCard1.render());
    var newCard2 = new Card({content:"Output: The directory where the \"bundle\" is generated"});
    element.appendChild(newCard2.render());
    var newCard3 = new Card({content:"Source Maps: How to retrieve the source file line number for debugging purposes"});
    element.appendChild(newCard3.render());
}

window.addEventListener("DOMContentLoaded", runOnLoad);