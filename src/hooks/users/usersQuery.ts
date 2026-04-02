import { useQuery } from "@tanstack/react-query";
import { usersApi } from "../../api/usersApi";
import { useUserStore } from "../../state/userStore";
import { useEffect } from "react";

import profileImg from "../../assets/img/profileImg.png";

export function useInitUsers() {
  const { setUsers, setActiveUser } = useUserStore();

  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await usersApi.getUsers();
      return res.map((user) => ({
        id: user.id,
        username: user.username,
        name: user.name,
        email: user.email,
        city: user.address.city,
        phone: user.phone,
        company: user.company.name,
        imgUrl: profileImg,
      }));
    },
    gcTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    retry: false,
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
      setActiveUser(data.map((user) => user.id));
    }
  }, [data, setUsers]);

  return { isLoading, error };
}
