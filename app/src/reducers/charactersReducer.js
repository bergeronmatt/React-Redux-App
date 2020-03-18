import { GET_DATA, UPDATE_CHARACTERS } from "../actions";


const initialState = {
    characters: [],
    isFetchingData: false
};

// export const getData = () => {
//     return {

//     }
// }

export const charactersReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
       
            };
        case UPDATE_CHARACTERS:
            return {
                ...state,
                characters: action.payload,
                isFetchingData: false
            }
        default: 
            return state;
    }

}