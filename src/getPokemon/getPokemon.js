import React from 'react';
import './getPokemon.css';

let url = 'https://pokeapi.co/api/v2/pokemon/';

class GetPokemon extends React.Component {
    fetchPokemon() {
        
    }
    render() {
     
       function getPokemon() {
            console.log(url + 'pikachu')
            fetch(url + 'pikachu').then(response => {
                if(response.ok) {
                    console.log(response.json)
                    return response.json().name;
                }
                throw new Error('Request failed!');
            }, networkError => console.log(networkError.message)
            ).then(jsonResponse => {
                console.log('second response')
                return 'hello'
            });
            
        };
        return (
            <div>
                <form>
                    <label htmlFor="pokemon-value">Type in a Pokemon</label>
                    <input type="text" id="text-box" />
                    <input type="submit" value="submit" onClick={this.getPokemon} />
                </form>
                <p>Pokemon: {getPokemon()}</p>
            </div>
        )
    }
};

export default GetPokemon;