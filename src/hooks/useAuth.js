import React, { useState, useEffect, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from "@/services/api";

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  return useContext(AuthContext);
};

function useProviderAuth() {
  const [token, setToken] = useState(undefined);
  useEffect(() => {
    if (token !== undefined) {
    localStorage.setItem("token", token);
    }
  }, [token]);
  const [user, setUser] = useState(null);
  const options = {
    headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
    },
  };
  const signIn = async (username, password) => {
    console.log({username: username, password: password});
    const { data: access_token } = await axios.post(
        endPoints.auth.login, 
        {username: username, password: password},
        options
    ); 
    
    if(access_token) {
      const token = access_token.token;
      setToken(token);
      Cookie.set("token", token, {expires: 5});

      axios.defaults.headers.Authorization = `Bearer ${token}`;
      //const {data: user} = await axios.get(endPoints.auth.profile);
      setUser(user);
    }
  };

  const logout = () => {
    Cookie.remove("token");
    localStorage.clear();
    setUser(null);
    delete axios.defaults.headers.Authorization;
    window.location.href = "/";
  };

  return {
    token,
    user,
    signIn,
    logout
  };
}
