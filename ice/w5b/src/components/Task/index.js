import "./index.css"

class Task {
    constructor(props, span) {
        this.props = props;
        this.props.done = false;
        this.element = document.createElement("div");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        this.onClick = this.onClick.bind(this);
        checkbox.addEventListener("change",this.onClick);

        this.element.appendChild(checkbox);
        this.span = document.createElement("span");
        this.element.appendChild(this.span);
        this.span.innerHTML = this.props.content;
        this.element.className = "task";  
    }
    onClick(e)
     {
        
        console.log(this);
        console.log(e.target);
        console.log(e.target.checked);
        if(e.target.checked)
        {
            this.props.done == true;
            this.span.style.textDecoration = "line-through";
        }
        else
        {
            this.props.done == false;
            this.span.style.textDecoration = "none";
        }
    }
    render() {
        return this.element;
    }
}

export default Task;