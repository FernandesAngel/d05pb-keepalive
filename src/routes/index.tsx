import { Route, Routes } from "react-router-dom";
import { useAuth } from "../contexts/auth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export function Router() {
  const { data } = useAuth();
  const { isLogged } = data;
  return (
    <Routes>
      <Route
        path="/"
        element={<PublicRoutes isLogged={isLogged && isLogged !== undefined} />}
      >
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route
        path="/home"
        element={
          <PrivateRoutes isLogged={isLogged && isLogged !== undefined} />
        }
      >
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<p>Theres nothing here: 404!</p>} />
    </Routes>
  );
}
