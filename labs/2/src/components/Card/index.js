import "./index.css"
    class Card {
        constructor(props) {
            this.props = props;
            this.element = document.createElement("div");
            this.element.className = "card";
            this.element.innerHTML = this.props.content;
        }
        render() {
            return this.element;
        }
    }
export default Card;