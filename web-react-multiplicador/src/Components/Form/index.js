import React, { Component } from 'react';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: '',
            num2: '',
            resultado: '',
        }

        this.calcular = this.calcular.bind(this)

    }

    calcular = () => {

        if ((this.state.num1 === '') || (this.state.num2 === '')) {
            alert('Preencha os campos acima');
            return;
        } else {
            var resu = this.state.num1 * this.state.num2
            this.setState({ resultado: 'Resultado é ' + resu })
        }
    }

    render() {
        return (

            <div>

                <div>
                    <div>
                        <label>Numero 1</label>
                        <input onChange={(e) => this.setState({ num1: e.target.value })} value={this.state.num1} type="text" className="inpuText" />
                    </div>
                    <div>
                        <label>Numero 2</label>
                        <input onChange={(e) => this.setState({ num2: e.target.value })} value={this.state.num2} type="text"/>
                    </div>
                </div>

                <button type="submit" className="btn" onClick={this.calcular}>Multiplicar</button>

                <div>
                    <p>{this.state.resultado}</p>
                </div>

            </div>

        )
    }
}