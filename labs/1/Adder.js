class Adder {
    constructor(props) {
        this.props = props;
    }
    sum() {
        this.props.a+this.props.b;
    }
    render() {
        return `<p>
            The sum of ${this.props.a} and ${this.props.b} is ${this.sum()}
        </p>`;
    }
}
module.exports = Adder;