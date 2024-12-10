import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter";
import { Navbar } from "./ui";

export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
