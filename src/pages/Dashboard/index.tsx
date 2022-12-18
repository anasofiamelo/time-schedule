import { useUser } from "../../contexts/user.context";

const Dashboard: React.FC = (props) => {
  const { currentUser } = useUser();
  return <p>Olá {currentUser.name}</p>;
};

export default Dashboard;
