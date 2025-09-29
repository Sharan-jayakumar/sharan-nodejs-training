import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

type AuthContextType = {
  user: { email: string } | null;
  token: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    confirmPassword: string
  ) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";
const API_URL = "http://localhost:3000/api";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    const user = sessionStorage.getItem(USER_KEY);
    if (token && user) {
      setUser(JSON.parse(user));
      setToken(token);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/sign-in`, { email, password });
    setToken(response.data.token);
    setUser(response.data.user);
    sessionStorage.setItem(TOKEN_KEY, response.data.token);
    sessionStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
    navigate("/dashboard");
  }

  const signUp = async (email: string, password: string, confirmPassword: string) => {
    const response = await axios.post(`${API_URL}/sign-up`, { email, password, confirmPassword });
    setToken(response.data.token);
    setUser(response.data.user);
    sessionStorage.setItem(TOKEN_KEY, response.data.token);
    sessionStorage.setItem(USER_KEY, JSON.stringify(response.data.user))
    navigate("/sign-in");
  }

  const signOut = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(USER_KEY);
    navigate("/sign-in");
  }

  const value = { user, token, signIn, signUp, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, AuthContext };