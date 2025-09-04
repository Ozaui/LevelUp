import { useParams } from "react-router-dom";
import Header from "../components/Header";

const User = () => {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <h1>{id}</h1>
    </div>
  );
};

export default User;
