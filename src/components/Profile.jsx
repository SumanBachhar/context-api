import { useGlobalContext } from "../context/UserContextProvider";

const Profile = () => {
  const { user } = useGlobalContext();
  if (!user) {
    return <h3>Please Login</h3>;
  } else {
    return <h3> Welcome {user.username}</h3>;
  }
};

export default Profile;
