import React, {Component} from "react";

@inject
class Decorators extends Component {
    render() {
        const { x, y } = this.props;
        return (
            <div>{x + y}</div>
        );
    }
}

function inject(Com) {
    return function() {
        return (
            <Com x={2} y={5}/>
        );
    };
}

export default Decorators;


