export const LoginStart = (adminCredentials) => ({
    type: "LOGIN_START",
})

export const LoginSuccess = (admin) => ({
    type: "LOGIN_SUCCESS",
    payload: admin,
})

export const LoginFaliure = () => ({
    type: "LOGIN_FAILURE",
})