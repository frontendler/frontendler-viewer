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
                <section>
                    <h1>Title H1</h1>
                    <p>
                        Do culpa ad laboris excepteur. Proident labore cillum
                        sint sunt esse cillum. Occaecat in non culpa nostrud
                        deserunt anim magna nisi commodo labore.
                    </p>
                    <h2>Title H2</h2>
                    <p>
                        Do culpa ad laboris excepteur. Proident labore cillum
                        sint sunt esse cillum. Occaecat in non culpa nostrud
                        deserunt anim magna nisi commodo labore.
                    </p>
                    <h3>Title H3</h3>
                    <p>
                        Do culpa ad laboris excepteur. Proident labore cillum
                        sint sunt esse cillum. Occaecat in non culpa nostrud
                        deserunt anim magna nisi commodo labore.
                    </p>
                    <h4>Title H4</h4>
                    <p>
                        Do culpa ad laboris excepteur. Proident labore cillum
                        sint sunt esse cillum. Occaecat in non culpa nostrud
                        deserunt anim magna nisi commodo labore.
                    </p>
                    <h5>Title H5</h5>
                    <p>
                        Do culpa ad laboris excepteur. Proident labore cillum
                        sint sunt esse cillum. Occaecat in non culpa nostrud
                        deserunt anim magna nisi commodo labore.
                    </p>
                    <h6>Title H6</h6>
                    <p>
                        Do culpa ad laboris excepteur. Proident labore cillum
                        sint sunt esse cillum. Occaecat in non culpa nostrud
                        deserunt anim magna nisi commodo labore.
                    </p>
                </section>
                <section>
                    <table>
                        <caption>Statement Summary</caption>
                        <thead>
                            <tr>
                                <th scope="col">Account</th>
                                <th scope="col">Due Date</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Period</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-label="Account">Visa - 3412</td>
                                <td data-label="Due Date">04/01/2016</td>
                                <td data-label="Amount">$1,190</td>
                                <td data-label="Period">
                                    03/01/2016 - 03/31/2016
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" data-label="Account">
                                    Visa - 6076
                                </td>
                                <td data-label="Due Date">03/01/2016</td>
                                <td data-label="Amount">$2,443</td>
                                <td data-label="Period">
                                    02/01/2016 - 02/29/2016
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" data-label="Account">
                                    Corporate AMEX
                                </td>
                                <td data-label="Due Date">03/01/2016</td>
                                <td data-label="Amount">$1,181</td>
                                <td data-label="Period">
                                    02/01/2016 - 02/29/2016
                                </td>
                            </tr>
                            <tr>
                                <td scope="row" data-label="Acount">
                                    Visa - 3412
                                </td>
                                <td data-label="Due Date">02/01/2016</td>
                                <td data-label="Amount">$842</td>
                                <td data-label="Period">
                                    01/01/2016 - 01/31/2016
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}

export default App;
