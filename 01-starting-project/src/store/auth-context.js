import React, {useState, useEffect} from "react";

let logoutTimer;

const AuthContext = React.createContext({
    token: '', 
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

const expirationTimeHelper = (expirationTime) => {
    const currentTime = new Date().getTime();
    const tokenExpiration = new Date(expirationTime).getTime();
    const remainingSessionTime = tokenExpiration - currentTime;
    return remainingSessionTime;
}

const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('expirationTime')

    const remainingTime = expirationTimeHelper(storedExpiration)
    if(remainingTime <= 60000){
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')
        return null
    }

    return {
        token: storedToken,
        remainingTime: remainingTime
    }
}

export const AuthContextProvider = (props) => {
    const tokenData = retrieveStoredToken();
    
    let initialToken;
    if(tokenData){
        initialToken = tokenData.token  
    } 

    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token;
    
    const logoutHandler = () => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expirationTime')

        if(logoutTimer) clearTimeout(logoutTimer)
    }

    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expirationTime', expirationTime)

        const remainingTime = expirationTimeHelper(expirationTime)
        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }

    useEffect(() => {
        if(tokenData){ 
            logoutTimer = setTimeout(logoutHandler, tokenData.remainingTime)
        }
    }, [tokenData])

    const contextValue = {
        token: token,
        isLoggedIn:userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext