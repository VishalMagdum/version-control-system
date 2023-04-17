export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case "SIGNUP_REQUEST":
        case "LOGIN_REQUEST":
            return {
                loading: true,
                isAuthenticated: false
            };
        case "SIGNUP_SUCCESS":
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            };

        case "SIGNUP_FAIL":
        case "LOGIN_FAIL":
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            };
        case "CLEAR_ERRORS":
            return {
                ...state,
                error: null,
            };

        default:
            return state;
    }

}