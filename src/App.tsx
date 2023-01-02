import { QueryClient, QueryClientProvider } from "react-query";
import { UserProvider } from "./contexts/user.context";
import { AuthProvider } from "./contexts/auth.context";
import { TaskProvider } from "./contexts/task.context";
import Dashboard from "./pages/Dashboard";
import { Counter } from "./components/Counter";

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <UserProvider>
          <TaskProvider>
            <Counter seconds={10750}></Counter>
            <Dashboard></Dashboard>
          </TaskProvider>
        </UserProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
