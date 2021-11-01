import * as types from "./actionTypes";

const intialState = {
    recipe:[],
    error:null,
    loadind:false,
};

const recipeReducer = (state = intialState , action) => {
    switch (action.type){
        case types.FETCH_RECIPE_START:
            return{
                ...state,
                loadind:true,
            };
            case types.FETCH_RECIPE_SUCCESS:
                return{
                    ...state,
                    loadind:false,
                    recipe: action.payload,
                };
                case types.FETCH_RECIPE_FAIL:
                    return{
                        ...state,
                        loadind:false,
                        error: action.payload,
                    };
                    default:
                        return state;
    }
};

export default recipeReducer;