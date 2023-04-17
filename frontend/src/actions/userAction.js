import axios from "axios";
// signup
export const signup = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "SIGNUP_REQUEST" });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        // console.log(userData)
        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/signup`,
            userData,
            config
        );

        dispatch(
            { type: "SIGNUP_SUCCESS", payload: data.user }
        )


    } catch (error) {
        dispatch({ type: "SIGNUP_FAIL", payload: error.response.data.message });
    }
};

// login
export const login = (userData) => async (dispatch) => {
    try {
        console.log(userData)
        dispatch({ type: "LOGIN_REQUEST" });
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const { data } = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/users/login`,
            userData,
            config
        );

        dispatch(
            { type: "LOGIN_SUCCESS", payload: data.user }
        )


    } catch (error) {
        dispatch({ type: "LOGIN_FAIL", payload: error.response.data.message });
    }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: "CLEAR_ERRORS"
    });
}