import { useQuery } from "react-query";
import useAuth from "./useAuth";
import axios from "axios";

const useInstructor = () => {
  const { user, loading } = useAuth();

  const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/user/instructor/${user?.email}`
      );
      return res.data;
    },
  });
  return [isInstructor, isInstructorLoading];
};

export default useInstructor;
