import React from 'react';
import './getPokemon.css';
import axios from 'axios';
let url = 'https://pokeapi.co/api/v2/pokemon/';

class GetPokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1: {},
            search: ""
        }
        
    }
    componentDidMount() {
        this.getPokemon();
    }
    getPokemon = () => {
        const { search } = this.state
         console.log(url + search)
         axios.get(url + search).then(response => {
             this.setState({
                 pokemon1: response.data
             })
         })
     };

    render() {
     
        return (
            <div>
                <form>
                    <label htmlFor="pokemon-value">Type in a Pokemon</label>
                    <input type="text" id="text-box" onChange={e => this.setState({search: e.target.value})}/>
                    <input type="submit" value="submit" onClick={ e => {this.getPokemon(e); e.preventDefault() }}/>
                </form>
                 <p>Pokemon: {this.state.pokemon1.name}</p>
                 <div>{this.state.search}</div>
            </div>
        )
    }
};

export default GetPokemon;