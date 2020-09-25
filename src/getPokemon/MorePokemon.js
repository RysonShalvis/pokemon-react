import React from 'react';
import axios from 'axios';



class MorePokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            morePokemon: '',
            inputField: '',
            chosenPokemon: ''
        }
        
        this.getMorePokemon = this.getMorePokemon.bind(this);
        this.getTextValue = this.getTextValue.bind(this);
    }

    getTextValue(event) {
            this.setState({
                inputField: event.target.value
            }, () => console.log(this.state.inputField));
            
        
    }

    getMorePokemon() {
        let url = 'https://pokeapi.co/api/v2/pokemon/';
        axios.get(url + this.state.inputField).then(response => {
            this.setState({
                morePokemon: response.data.name,
            }, () => console.log('this is the setstate function'));

        }).then( () => this.setState({chosenPokemon: `You choose ${this.state.morePokemon}`}))
    }

   

    render() {
        return (
            <div>
                <input onChange={this.getTextValue} name="input" type="text" placeholder="put pokemon here" />
                <button onClick={this.getMorePokemon}>click here for poKeMon</button>
                <h1>{this.state.chosenPokemon}</h1>
            </div>
        )
    }
};

export default MorePokemon;