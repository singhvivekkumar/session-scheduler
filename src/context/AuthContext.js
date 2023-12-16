import { createContext, useState } from "react";

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
});

export const AuthProvider = (children) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};