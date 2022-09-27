import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserProps {
  email: string;
}

export interface CredentialProps {
  email: string;
  password: string;
}

interface AuthState {
  user: UserProps;
  isLogged: boolean;
}

interface AuthContextData {
  data: AuthState;
  authError: boolean;
  signIn: (credentials: CredentialProps) => Promise<void>;
  signOut: () => void;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState({} as AuthState);
  const [authError, setAuthError] = useState(false);

  useEffect(() => {
    function loadStorageData(): void {
      const dataStorage = localStorage.getItem(
        import.meta.env.VITE_LOCAL_STORAGE_KEY
      );

      if (dataStorage) {
        const dataParse = JSON.parse(dataStorage);
        setData(dataParse);
      }
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async (credentials: CredentialProps) => {
    try {
      // chamada api
      const result = {
        user: {
          email: credentials.email,
        },
        isLogged: true,
      };
      setData(result);
      localStorage.setItem(
        import.meta.env.VITE_LOCAL_STORAGE_KEY,
        JSON.stringify(result)
      );
      setAuthError(false);
    } catch (error) {
      setAuthError(true);
      console.log(error);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(import.meta.env.VITE_LOCAL_STORAGE_KEY);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        data,
        signIn,
        signOut,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
