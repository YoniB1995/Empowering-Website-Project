import { useState, useEffect, createContext } from "react";

const API =
  process.env.NODE_ENV === "production"
    ? `https://yonib.herokuapp.com`
    : "http://localhost:5000";

/*
  Add those properties to createContext in order to get auto complete
  when we use this context. (Not mandatory)
*/
export const AuthContext = createContext({
  isLogin: false,
  userClearLocalStorage: false,
  login: () => {},
  logout: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [userClearLocalStorage, setUserClearLocalStorage] = useState(false);
  const [isLogin, setIsLogin] = useState(!!localStorage.getItem("token"));

  const login =  (user) => {
    const options = {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    };
    try {
      return fetch(`${API}/admin/logIn`, options)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.token);
          setIsLogin(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUserClearLocalStorage(false);
    setIsLogin(false);
  };

  useEffect(() => {
    window.addEventListener("storage", () => setUserClearLocalStorage(true));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin,
        userClearLocalStorage,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
