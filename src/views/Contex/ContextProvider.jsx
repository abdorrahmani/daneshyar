import React, {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
const StateContext = createContext({
    currentUser: null,
    token: null,
    notification: null,
    setUser: () => {},
    setToken: () => {},
    setNotification: () => {}
})

 const ContextProvider = ({children}) => {

    const [user , setUser] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [notification, _setNotification] = useState('');
    const [isRequestSent, setIsRequestSent] = useState(false);


    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);

        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    const accessToken = localStorage.getItem('ACCESS_TOKEN');




     useEffect(() => {
         if (!isRequestSent && accessToken) {
             axios
                 .get(`${import.meta.env.VITE_API_BASE_URL}/api/user`, {
                     headers: {
                         Authorization: `Bearer ${accessToken}`,
                     },
                 })
                 .then((response) => {
                     const userData = response.data.user;

                 })
                 .catch((error) => {
                     console.error('Error:', error);
                 });
         }
     }, [accessToken, isRequestSent]);


    const setNotification = message => {
        _setNotification(message);

        setTimeout(() => {
            _setNotification('')
        }, 5000)
    }


    return (
        <StateContext.Provider value={{
            user,
            token,
            setToken,
            notification,
            setNotification
        }}>
            {children}
        </StateContext.Provider>
    );
}
const MemoizedContextProvider = React.memo(ContextProvider);


export { MemoizedContextProvider as  ContextProvider};

export const useStateContext = () => useContext(StateContext);