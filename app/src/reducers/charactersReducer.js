import { GET_DATA } from "../actions";


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
                isFetchingData: true
            };

        default: 
            return state;
    }

}