import React, {useState, useEffect} from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
})

const expirationTimeHelper = (exTime) => {
    const current = new Date().getTime();
    const tokenTime = new Date(exTime).getTime();
    const remainingTime = tokenTime - current;
    return remainingTime
}

const retrieveStoreToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('expirationTime')

    const remainingTime = expirationTimeHelper(storedExpiration)
    if(remainingTime <= 60000){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }

    return {
        token:storedToken,
        remainingTime: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoreToken();

    let initialToken;
    if(tokenData){
        initialToken = tokenData.token
    }

    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token

    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
    }

}