import { Title } from "../../components/Title";
import { useFirestoreDocument } from "@react-query-firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";
import { User } from "../../models/User";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../contexts/auth.context";
import { Tasks } from "../../components/Tasks";

const Dashboard: React.FC = (props) => {
  const { userId } = useAuth();
  const userRef = doc(db, "users", userId);
  const userResult = useFirestoreDocument(["users", userId], userRef);

  if (userResult.isLoading) {
    return <Loading />;
  }

  const userData = userResult.data?.data() as User;

  return (
    <>
      <Title text="Dashboard" size={30} />
      <p>Olá, {userData.name}</p>
      <span>Suas tasks:</span>
      <Tasks />
    </>
  );
};

export default Dashboard;
