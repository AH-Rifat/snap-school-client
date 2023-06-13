import axios from "axios";
import { useQuery } from "react-query";
import useAuth from "./useAuth";


const useStudent = () => {
    const { user, loading } = useAuth();

    const { data: isStudent, isLoading: isStudentLoading } = useQuery({
        queryKey: ["isStudent", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios.get(
                `${import.meta.env.VITE_SERVER_URL}/user/student/${user?.email}`
            );
            return res.data;
        },
    });
    return [isStudent, isStudentLoading];
};

export default useStudent;