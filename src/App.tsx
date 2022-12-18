import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

import Dashboard from "./pages/Dashboard";

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Dashboard></Dashboard>
    </QueryClientProvider>
  );
};

export default App;
