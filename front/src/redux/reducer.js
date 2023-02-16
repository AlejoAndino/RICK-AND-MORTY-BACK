import { ADD_FAVORITE } from "./actions-types";
import { DELETE_FAVORITE } from "./actions-types";
import { ORDER } from "./actions-types";
import { FILTER } from "./actions-types";

let initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(fav => fav.id !== action.payload)
            }
        case FILTER:
            const allCharFiltered = state.allCharacters.filter(char => char.gender === action.payload)
            return {
                ...state,
                myFavorites: allCharFiltered
            }
        case ORDER:
            return {
                ...state,
                myFavorites:
                    action.payload === "Ascendente"
                    ? state.allCharacters.sort((a,b) => a.id - b.id)
                    : state.allCharacters.sort((a,b) => b.id - a.id)
            }

        default:
            return {...state}
    }
}

export default reducer;