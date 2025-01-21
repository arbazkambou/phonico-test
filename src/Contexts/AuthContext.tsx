"use client";

import ClientSide from "@/api/ClientSide";
import { setCookieWithOptions } from "@/helpers/setCookieWithOptions";
import { auth, provider } from "@/lib/firebase";
import { FetchUserResponseType } from "@/types/FetchUserType";
import {
  LoginUserInputType,
  LoginUserResponseType,
} from "@/types/LoginUserTypes";
import { LoggedInUserType } from "@/types/UserType";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProps {
  user: LoggedInUserType | null;
  token: string | null;
  login: ({ email, password }: LoginUserInputType) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  setUser: (user: LoggedInUserType) => void;
  isAuthLoading: boolean;
  loginWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  login: async () => {},
  logout: () => {},
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUser: () => {},
  isAuthLoading: true,
  loginWithGoogle: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<LoggedInUserType | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    setIsAuthLoading(true);
    const tokenFromCookie = Cookies.get("token");
    if (tokenFromCookie) {
      setIsAuthenticated(true);
      setToken(tokenFromCookie);
      fetchUser(tokenFromCookie);
    } else {
      setUser(null);
      setIsAuthenticated(false);
      setIsAuthLoading(false);
    }
  }, []);

  const fetchUser = async (token: string) => {
    try {
      const response = await ClientSide.get<FetchUserResponseType>(
        "/api/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.data.status) {
        logout();
      }
      setUser(response.data.data);
      setIsAuthLoading(false);
    } catch {
      logout();
    }
  };

  const login = async ({ email, password }: LoginUserInputType) => {
    try {
      const response = await ClientSide.post<LoginUserResponseType>(
        "/api/login",
        {
          email,
          password,
        }
      );
      if (response.data.status === true) {
        const { access_token: token, user } = response.data;
        setCookieWithOptions({
          key: "token",
          value: token,
          options: {
            expires: 1,
            secure: true,
          },
        });
        setToken(token);
        setUser(user);
        setIsAuthenticated(true);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.message);
      } else if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      const token = await firebaseUser.getIdToken();
      // const userInfo = {
      //   email: firebaseUser.email,
      //   displayName: firebaseUser.displayName,
      //   photoURL: firebaseUser.photoURL,
      //   uid: firebaseUser.uid,
      // };
      Cookies.set("token", token, { expires: 1, secure: true });
      setToken(token);
      setIsAuthenticated(true);
      // return true;
    } catch (error) {
      throw error;
    }
  };

  // const logout = () => {
  //   Cookies.remove("token");
  //   setToken(null);
  //   setUser(null);
  //   setIsAuthenticated(false);
  //   router.push("/login");
  // };

  const logout = () => {
    Cookies.remove("token");
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    router.push("/login");
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        logout,
        isAuthenticated,
        setIsAuthenticated,
        setUser,
        isAuthLoading,
        loginWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
