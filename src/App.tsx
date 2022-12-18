import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./contexts/user.context";
import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Dashboard></Dashboard>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default App;
