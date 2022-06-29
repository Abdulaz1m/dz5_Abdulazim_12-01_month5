import {types} from "../types";


export const massageTrue = (data) => {
    return {
        type: types.MESSAGE_TRUE,
        payload: data
    }
}

export const massageFalse = () => {
    return {
        type: types.MESSAGE_FALSE
    }
}

export const createUserAction = (data) => {
    return async function (dispatch) {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com/users', options);

        if(response.status === 404) {
            dispatch(massageTrue({ text: "не создано", button: "danger" }))
        }
        else {
            dispatch(massageTrue({text: "создано", button: "success"}))
        }
    }
}