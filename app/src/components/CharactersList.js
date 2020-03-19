import React from 'react'
import {connect} from 'react-redux'

const CharactersList = props => {
    return ( 
    <>
        {props.error ? (<div className='error'>{props.error}</div>) :  props.characters.map(character => (
            <div className="characterCard">
                <img src={`https://rickandmortyapi.com/api/character/avatar/${character.id}.jpeg`} alt={`${character.name}`}/>
                <h1>{character.name}</h1>
                <h2>{character.species}</h2>
                <h2>{character.gender}</h2>
                <h2>{character.origin.name}</h2>
            </div>
            ))}
    </>
    );
};
    

const mapPropstoState = state => {
    return {
        characters: state.characters,
        error: state.error
    }
}

export default connect(
    mapPropstoState, 
    {}
)(CharactersList);