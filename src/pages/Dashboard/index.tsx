import { useUser } from "../../contexts/user.context";

const Dashboard: React.FC = (props) => {
  const { getCurrentUser } = useUser();
  getCurrentUser();
  return <div>Dashboard</div>;
};

export default Dashboard;
