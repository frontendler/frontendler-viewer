import React, { Component } from "react";
import logo from "../../images/logo.svg";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };
    }

    render() {
        return (
            <div className="App">
                <h1>Title H1</h1>
                <p>Do culpa ad laboris excepteur. Proident labore cillum sint sunt esse cillum. Occaecat in non culpa nostrud deserunt anim magna nisi commodo labore.</p>
                <h2>Title H2</h2>
                <p>Do culpa ad laboris excepteur. Proident labore cillum sint sunt esse cillum. Occaecat in non culpa nostrud deserunt anim magna nisi commodo labore.</p>
                <h3>Title H3</h3>
                <p>Do culpa ad laboris excepteur. Proident labore cillum sint sunt esse cillum. Occaecat in non culpa nostrud deserunt anim magna nisi commodo labore.</p>
                <h4>Title H4</h4>
                <p>Do culpa ad laboris excepteur. Proident labore cillum sint sunt esse cillum. Occaecat in non culpa nostrud deserunt anim magna nisi commodo labore.</p>
                <h5>Title H5</h5>
                <p>Do culpa ad laboris excepteur. Proident labore cillum sint sunt esse cillum. Occaecat in non culpa nostrud deserunt anim magna nisi commodo labore.</p>
                <h6>Title H6</h6>
                <p>Do culpa ad laboris excepteur. Proident labore cillum sint sunt esse cillum. Occaecat in non culpa nostrud deserunt anim magna nisi commodo labore.</p>
            </div>
        );
    }
}

export default App;
