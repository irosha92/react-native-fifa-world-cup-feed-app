const initialState = {
    isUserLoggedIn : false,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                isUserLoggedIn: true
            };
        case 'LOGIN_FAIL':
            return {
                isUserLoggedIn: false
            };
        case 'LOADING':
            return {
                isLoading: true
            };
        default:
            return state;
    }
}

export default reducer;