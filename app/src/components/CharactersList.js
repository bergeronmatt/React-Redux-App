import React from 'react'
import {connect} from 'react-redux'

const CharactersList = props => {
    return ( 
    <>
        {props.characters.map(character => (
            <div>{character.name}</div>
            ))}
    </>
    );
};
    

const mapPropstoState = state => {
    return {
        characters: state.characters
    }
}

export default connect(
    mapPropstoState, 
    {}
)(CharactersList);