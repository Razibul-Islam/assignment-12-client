import { useEffect, useState } from "react";

const UseAdmin = (email) => {
  // console.log(email);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
      // console.log(email);
      fetch(`https://classic-server.vercel.app/adminUsers/${email}`)
        .then((res) => res.json())
        .then((data) => {
          //   console.log(data);
          setIsAdmin(data.role);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
