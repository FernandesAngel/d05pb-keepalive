import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, db } from "../../firebase";
// import firebase from "firebase/compat/app";

interface UserProps {
  email: string | null | undefined;
  name: string;
  surname: string;
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
  signUpError: string;
  signIn: (credentials: CredentialProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: CredentialProps, user: UserProps) => Promise<void>;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState({} as AuthState);
  const [authError, setAuthError] = useState(false);
  const [signUpError, setSignUpError] = useState("");

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
    let getUsername = "";
    let getUserSurname = "";
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      );

      const getUserQuery = query(
        collection(db, "users"),
        where("email", "==", user?.email)
      );
      const querySnapshot = await getDocs(getUserQuery);
      querySnapshot.forEach((doc) => {
        getUsername = doc.data().name;
        getUserSurname = doc.data().surname;
      });
      const result = {
        user: {
          email: user?.email,
          name: getUsername,
          surname: getUserSurname,
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

  const signUp = useCallback(
    async (credentials: CredentialProps, user: UserProps) => {
      try {
        setSignUpError("");
        const response = await auth.createUserWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
        const docRef = await addDoc(collection(db, "users"), {
          email: response.user?.email,
          name: user.name,
        });
        console.log("Document written with ID: ", docRef);
        console.log("Cadastrado com sucesso");
      } catch (e) {
        setSignUpError("Conta já existente");
        console.log("erroou", e);
      }
    },
    []
  );

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
        signUp,
        signUpError,
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
