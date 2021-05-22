export const LoginStart = (employeeCredentials) => ({
    type: "LOGIN_START",
})

export const LoginSuccess = (employee) => ({
    type: "LOGIN_SUCCESS",
    payload: employee,
})

export const LoginFaliure = () => ({
    type: "LOGIN_FAILURE",
})