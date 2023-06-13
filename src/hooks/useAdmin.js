import axios from "axios";
import useAuth from "./useAuth";
import { useQuery } from "react-query";

const useAdmin = () => {
  const { user, loading } = useAuth();

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/user/admin/${user?.email}`
      );
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
